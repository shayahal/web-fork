import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Loader } from '@googlemaps/js-api-loader';

const classes = {
  container: 'w-full rounded-lg overflow-hidden shadow-md border border-gray-200',
  mapWrapper: 'w-full h-96',
  loadingContainer: 'w-full h-96 flex items-center justify-center bg-gray-100 rounded-lg',
  loadingText: 'text-gray-600 font-medium',
  errorContainer: 'w-full h-96 flex items-center justify-center bg-red-50 rounded-lg border border-red-200',
  errorText: 'text-red-600 font-medium',
  infoWindow: 'p-4 max-w-sm',
  restaurantName: 'font-bold text-lg mb-2 text-gray-800',
  restaurantLocation: 'text-sm text-gray-600 mb-2',
  restaurantNote: 'text-sm text-gray-700 mb-3 italic leading-relaxed',
  restaurantLink: 'inline-block text-blue-600 hover:text-blue-800 font-medium text-sm hover:underline',
};

const RestaurantMap = ({ restaurants = [] }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);
  const infoWindowRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initMap = async () => {
      try {
        // Check for API key
        if (!process.env.GATSBY_GOOGLE_MAPS_API_KEY) {
          setError('Google Maps API key is not configured. Please set GATSBY_GOOGLE_MAPS_API_KEY environment variable.');
          setLoading(false);
          return;
        }

        // Load Google Maps API
        const loader = new Loader({
          apiKey: process.env.GATSBY_GOOGLE_MAPS_API_KEY,
          version: 'weekly',
        });

        const google = await loader.load();

        if (!mapRef.current) {
          setLoading(false);
          return;
        }

        // Initialize map centered on Portugal
        const mapInstance = new google.maps.Map(mapRef.current, {
          zoom: 7,
          center: { lat: 39.5, lng: -8.0 },
          mapTypeControl: true,
          fullscreenControl: true,
          streetViewControl: false,
        });

        mapInstanceRef.current = mapInstance;

        // Create info window (single reusable window)
        infoWindowRef.current = new google.maps.InfoWindow();

        // Create markers for each restaurant
        if (restaurants && restaurants.length > 0) {
          restaurants.forEach((restaurant) => {
            if (!restaurant.coordinates || !restaurant.coordinates.lat || !restaurant.coordinates.lng) {
              console.warn(`Restaurant ${restaurant.name} has invalid coordinates`);
              return;
            }

            const marker = new google.maps.Marker({
              position: {
                lat: restaurant.coordinates.lat,
                lng: restaurant.coordinates.lng,
              },
              map: mapInstance,
              title: restaurant.name,
            });

            // Create info window content
            const infoContent = document.createElement('div');
            infoContent.className = classes.infoWindow;
            infoContent.innerHTML = `
              <div class="${classes.restaurantName}">${escapeHtml(restaurant.name)}</div>
              <div class="${classes.restaurantLocation}">${escapeHtml(restaurant.location)}</div>
              ${
                restaurant.note
                  ? `<div class="${classes.restaurantNote}">${escapeHtml(restaurant.note)}</div>`
                  : ''
              }
              ${
                restaurant.url
                  ? `<a href="${escapeHtml(restaurant.url)}" target="_blank" rel="noopener noreferrer" class="${classes.restaurantLink}">Visit Website</a>`
                  : ''
              }
            `;

            // Add click listener to marker
            marker.addListener('click', () => {
              // Close previous info window if open
              if (infoWindowRef.current) {
                infoWindowRef.current.close();
              }

              // Open new info window
              infoWindowRef.current = new google.maps.InfoWindow({
                content: infoContent,
              });
              infoWindowRef.current.open(mapInstance, marker);
            });

            markersRef.current.push(marker);
          });
        }

        setLoading(false);
        setError(null);
      } catch (err) {
        console.error('Error loading Google Maps:', err);
        setError(`Failed to load Google Maps: ${err.message}`);
        setLoading(false);
      }
    };

    initMap();

    // Cleanup function
    return () => {
      // Clear markers
      markersRef.current.forEach((marker) => {
        marker.setMap(null);
      });
      markersRef.current = [];

      // Close info window
      if (infoWindowRef.current) {
        infoWindowRef.current.close();
      }
    };
  }, [restaurants]);

  // Helper function to escape HTML
  const escapeHtml = (text) => {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  };

  if (error) {
    return (
      <div className={classes.container}>
        <div className={classes.errorContainer}>
          <div className={classes.errorText}>{error}</div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className={classes.container}>
        <div className={classes.loadingContainer}>
          <div className={classes.loadingText}>Loading map...</div>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <div ref={mapRef} className={classes.mapWrapper} />
    </div>
  );
};

RestaurantMap.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      location: PropTypes.string,
      coordinates: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired,
      }).isRequired,
      note: PropTypes.string,
      url: PropTypes.string,
    })
  ),
};

export default RestaurantMap;
