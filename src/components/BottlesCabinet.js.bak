import React, { useState } from 'react';

const BottlesCabinet = () => {
  const [hoveredBottle, setHoveredBottle] = useState(null);

  const bottles = [
    // GIN
    { id: 'tanqueray', name: 'Tanqueray', category: 'gin', tier: 'work', price: '~110 ₪', desc: 'The world\'s largest gin brand. Consistently available and excellent value. A reliable choice for any gin cocktail.' },
    { id: 'bombay', name: 'Bombay Sapphire', category: 'gin', tier: '', price: '~110 ₪', desc: 'Often used in cocktail bars. Excellent value for money. A perfect step up from entry-level gins.' },
    { id: 'beefeater', name: 'Beefeater', category: 'gin', tier: '', price: '~90 ₪', desc: 'The cheapest quality gin that makes great cocktails.' },
    { id: 'plymouth', name: 'Plymouth', category: 'gin', tier: '', price: '~140 ₪', desc: 'A different type of gin. Slightly smoother and sweeter. Perfect for sour-style cocktails.' },
    { id: 'mmueller', name: 'Martin Miller\'s', category: 'gin', tier: 'secondary', price: '~140 ₪', desc: 'One of my personal favorites. More herbal and citrusy than standard London dry gins. Perfect when you want to really taste the gin.' },
    { id: 'roku', name: 'Roku', category: 'gin', tier: '', price: '~150 ₪', desc: 'Japanese gin with yuzu and jasmine. A special collectible showing gin\'s global reach.' },
    { id: 'kinobi', name: 'Ki-No-Bi Gin', category: 'gin', tier: 'impression', price: '~150 ₪', desc: 'Japanese gin with yuzu and jasmine. Found in Japan, then discovered it locally. A beautiful example of gin\'s diversity.' },

    // RUM
    { id: 'plantation3', name: 'Plantation 3 Étoiles', category: 'rum', tier: 'work', price: '~110 ₪', desc: 'A blend of different rums with complex, interesting flavors. Truly excellent for every use. The rum I reach for most often.' },
    { id: 'havanaclub', name: 'Havana Club', category: 'rum', tier: '', price: '~110 ₪', desc: 'Cuban rum. Refined and elegant. Excellent quality at great price.' },
    { id: 'eldorado3', name: 'El Dorado 3', category: 'rum', tier: '', price: '~110 ₪', desc: 'Delicious and excellent value. A workhorse rum from Guyana.' },
    { id: 'bacardi', name: 'Bacardi', category: 'rum', tier: '', price: '~80 ₪', desc: 'The world\'s most-sold rum from Puerto Rico. Slightly aggressive in taste but excellent for Daiquiris.' },
    { id: 'veritas', name: 'Veritas', category: 'rum', tier: '', price: '~200+ ₪', desc: 'For advanced palates. Expensive but excellent.' },
    { id: 'appleton', name: 'Appleton Signature', category: 'rum', tier: 'secondary', price: '~120 ₪', desc: 'Really excellent for cocktails. Interesting flavors without overwhelming. Great price. Made by Joy Spence, the first female master blender in the industry.' },
    { id: 'smithcross', name: 'Smith & Cross', category: 'rum', tier: 'secondary', price: '~140 ₪', desc: 'Much more complex and robust. Use sparingly in place of regular aged rum—it upgrades cocktails dramatically.' },
    { id: 'eldorado5', name: 'El Dorado 5', category: 'rum', tier: '', price: '~120 ₪', desc: 'Light and pleasant for cocktails. Hard to find but excellent VFM when available.' },
    { id: 'rhumjm', name: 'Rhum J.M VSOP', category: 'rum', tier: 'impression', price: '~230 ₪', desc: 'An agricole rum from Martinique. I\'ve had this for years and absolutely love it. Shows rum\'s incredible diversity beyond white rums.' },

    // WHISKEY
    { id: 'buffalotrace', name: 'Buffalo Trace', category: 'whiskey', tier: 'work', price: '~150 ₪', desc: 'American bourbon. Sweet and smooth—a very pleasant gateway into the world of whiskey. Excellent in many cocktails.' },
    { id: 'wt101', name: 'Wild Turkey 101', category: 'whiskey', tier: '', price: '~110 ₪', desc: 'Works excellently in cocktails. Robust and flavorful bourbon.' },
    { id: 'wt81', name: 'Wild Turkey 81', category: 'whiskey', tier: '', price: '~90 ₪', desc: 'Simpler but still good. Works well in cocktails.' },
    { id: 'bullet', name: 'Bullet', category: 'whiskey', tier: '', price: '~80 ₪', desc: 'Affordable bourbon that does the job. Entry-level quality.' },
    { id: 'elijahcraig', name: 'Elijah Craig Small Batch', category: 'whiskey', tier: 'secondary', price: '~200 ₪', desc: 'So far has made the best cocktails I\'ve ever prepared. A premium bourbon that creates exceptional cocktails. Worth every penny.' },
    { id: 'monkeyshoulder', name: 'Monkey Shoulder', category: 'whiskey', tier: 'secondary', price: '~150 ₪', desc: 'Scottish blend. Smooth with interesting flavor and slight smokiness. Shows whiskey\'s diversity beyond bourbon.' },
    { id: 'nakedgrouse', name: 'Naked Grouse', category: 'whiskey', tier: '', price: '~150 ₪', desc: 'Another excellent Scottish option. Complex and interesting.' },

    // TEQUILA
    { id: 'espolon', name: 'Espolòn Blanco', category: 'tequila', tier: 'work', price: '~140 ₪', desc: 'Silver (unaged) tequila. Essential for cocktails. Almost always what you use in cocktails rather than aged varieties.' },
    { id: 'mezcalrosa', name: 'Mezcal Rosa', category: 'tequila', tier: 'work', price: '~140 ₪', desc: 'My current mezcal with excellent value. Medium smoke level for balanced cocktails.' },
    { id: 'delmaguey', name: 'Del Maguey Vida', category: 'tequila', tier: '', price: '~150 ₪', desc: 'Perfect smoke level. Beautiful in cocktails. Hard to find now.' },
    { id: '400conejos', name: '400 Conejos', category: 'tequila', tier: '', price: '~160 ₪', desc: 'Tried this in cocktails in South America. Fantastic.' },
    { id: 'montelobos', name: 'Montelobos', category: 'tequila', tier: '', price: '~140 ₪', desc: 'Super pleasant and goes down smoothly. Perfect for cocktails.' },
    { id: 'ochoplata', name: 'Ocho Plata', category: 'tequila', tier: '', price: '~140 ₪', desc: 'Premium silver tequila. Excellent value for 500ml bottle.' },
    { id: 'milagro', name: 'Milagro Silver', category: 'tequila', tier: '', price: '~130 ₪', desc: 'Very good tequila. Reliable choice.' },
    { id: 'lunazol', name: 'Lunazol', category: 'tequila', tier: '', price: '~140 ₪', desc: 'Slightly better than standard options.' },
    { id: 'cuervo', name: 'Cuervo', category: 'tequila', tier: '', price: '~100 ₪', desc: 'Decent but nothing special. A baseline option.' },

    // LIQUEURS
    { id: 'cointreau', name: 'Cointreau', category: 'liqueur', tier: 'work', price: '~80 ₪', desc: 'Orange liqueur. The most classic choice. Always in my bar. Appears in countless cocktails.' },
    { id: 'campari', name: 'Campari', category: 'liqueur', tier: 'work', price: '~100 ₪', desc: 'King of bitters. Mixes with many spirits. Appears in countless classic cocktails. Long shelf life after opening.' },
    { id: 'aperol', name: 'Aperol', category: 'liqueur', tier: '', price: '~90 ₪', desc: 'Lighter and sweeter than Campari. Famous for Aperol Spritz, which makes most of your friends happy.' },
    { id: 'vermouth', name: 'Vermouth', category: 'liqueur', tier: '', price: '~80-120 ₪', desc: 'Three types: red, white, and dry. Fortified and botanicaled wine. Store in fridge after opening—they spoil.' },
    { id: 'greenchart', name: 'Green Chartreuse', category: 'liqueur', tier: 'secondary', price: '~120 ₪', desc: 'Started with a small 200ml bottle to understand how to use it. Now absolutely essential. Complex herbal liqueur with 130 different botanicals.' },
    { id: 'yellowchart', name: 'Yellow Chartreuse', category: 'liqueur', tier: '', price: '~120 ₪', desc: 'Sweeter sibling of Green Chartreuse. Different character, also useful.' },
    { id: 'amaro', name: 'Amaro', category: 'liqueur', tier: 'secondary', price: '~100 ₪', desc: 'Italian herbal liqueur with complex flavors. Elevates specific cocktails beautifully.' },
    { id: 'maraschino', name: 'Maraschino Liqueur', category: 'liqueur', tier: '', price: '~90 ₪', desc: 'Sweet cherry liqueur. Appears in classic cocktails.' },
    { id: 'elderflower', name: 'Elder Flower Liqueur', category: 'liqueur', tier: '', price: '~100 ₪', desc: 'Floral and delicate. Beautiful in certain cocktails.' },
    { id: 'angostura', name: 'Angostura Bitters', category: 'liqueur', tier: '', price: '~50 ₪', desc: 'The spice of cocktails. Use in drops. Essential for classic drinks.' },

    // OTHER
    { id: 'hennessy', name: 'Hennessy VS', category: 'other', tier: 'work', price: '~150 ₪', desc: 'A Cognac—brandy made in the Cognac region with strict production standards. Perfect for classic cocktails. Quality almost guaranteed.' },
    { id: 'rouskii', name: 'Rouskii Standard', category: 'other', tier: '', price: '~80 ₪', desc: 'Quality vodka. I use it frequently for making homemade infusions and liqueurs by steeping ingredients in it.' },
    { id: 'veche', name: 'Veche Vodka', category: 'other', tier: 'impression', price: '~130 ₪', desc: 'Moldovan vodka. A bottle with a story. I collect these as much for the memories as for the spirit.' },
    { id: 'pisco', name: 'Pisco', category: 'other', tier: '', price: '~120 ₪', desc: 'South American spirit. Fun to use in cocktails. Represents the diversity of spirits around the world.' },
    { id: 'pimms', name: 'Pimm\'s', category: 'other', tier: '', price: '~90 ₪', desc: 'British spirit liqueur. Great for refreshing summer cocktails.' },
    { id: 'benedictine', name: 'Bénédictine', category: 'other', tier: '', price: '~100 ₪', desc: 'French herbal liqueur. Complex and aromatic.' },
    { id: 'violet', name: 'Violet Liqueur', category: 'other', tier: '', price: '~80 ₪', desc: 'Only used for one specific cocktail: Aviation. Took time to master it, but it\'s truly wonderful.' },
    { id: 'akvavit', name: 'Akvavit', category: 'other', tier: '', price: '~100 ₪', desc: 'Scandinavian spirit, mainly caraway flavor. Not very frequently used, but interesting when you want something different.' },
    { id: 'cremecacao', name: 'Crème de Cacao', category: 'other', tier: '', price: 'Homemade', desc: 'I make this myself. Homemade liqueurs can be special and suit your taste perfectly.' },
    { id: 'coffeeliquer', name: 'Coffee Liqueur', category: 'other', tier: '', price: 'Homemade', desc: 'Also homemade. Great for coffee-based cocktails and adds personal touch to your collection.' },
  ];

  const spiritGroups = [
    {
      category: 'gin',
      emoji: '🌿',
      title: 'Gin',
      context: 'The dominant flavor in gin comes from juniper berries. Different gins vary dramatically based on botanicals used. Almost always look for "London dry gin"—the style that dominates the cocktail world.',
    },
    {
      category: 'rum',
      emoji: '🌴',
      title: 'Rum',
      context: 'Now my most-used spirit. Made from molasses, a byproduct of sugar production—a drink of the poor that became royal. Rum style is defined by country of origin. Each region makes rum in a distinct style.',
    },
    {
      category: 'whiskey',
      emoji: '🥃',
      title: 'Whiskey',
      context: 'Many types of whiskey exist, with differences from ingredients, origin, and production method. I\'m definitely a bourbon person—it\'s smoother and more approachable than other types, made primarily from corn.',
    },
    {
      category: 'tequila',
      emoji: '🌵',
      title: 'Tequila & Mezcal',
      context: 'Tequila is a type of mezcal. Mezcal is made from agave plants. Mezcal production often includes smoking the agave heart, creating smoky flavor. I prefer half tequila, half mezcal in cocktails to avoid overwhelming smokiness.',
    },
    {
      category: 'liqueur',
      emoji: '🍊',
      title: 'Liqueurs & Essential Spirits',
      context: 'The supporting cast that appears in countless cocktails. These spirits elevate your capabilities dramatically without much complexity. Cointreau and Campari should come early to most home bars.',
    },
    {
      category: 'other',
      emoji: '🍷',
      title: 'Cognac & Other Spirits',
      context: 'Cognac is brandy made in the Cognac region with strict production standards—which means quality is almost guaranteed. These are the specialty and collectible bottles that add character to your bar.',
    },
  ];

  const getBottleColor = (category) => {
    const colors = {
      gin: 'linear-gradient(135deg, #e8f5a4 0%, #c4d96f 50%, #a8c84f 100%)',
      rum: 'linear-gradient(135deg, #f0c4a0 0%, #d4a574 50%, #b8855a 100%)',
      whiskey: 'linear-gradient(135deg, #b8a08c 0%, #a0826d 50%, #845d53 100%)',
      tequila: 'linear-gradient(135deg, #e8f5a4 0%, #c4d96f 50%, #a8c84f 100%)',
      liqueur: 'linear-gradient(135deg, #fdd835 0%, #f7b731 50%, #d4a574 100%)',
      other: 'linear-gradient(135deg, #c4a9d8 0%, #9b6b94 50%, #7a5577 100%)',
    };
    return colors[category] || colors.other;
  };

  const getTierInfo = (tier) => {
    const tiers = {
      work: { icon: '🏆', label: 'My Go-To', color: '#dbeafe', textColor: '#1e40af' },
      secondary: { icon: '💎', label: 'Secondary', color: '#e0e7ff', textColor: '#3730a3' },
      impression: { icon: '🌟', label: 'Collectible', color: '#f3e8ff', textColor: '#6b21a8' },
    };
    return tiers[tier] || null;
  };

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#faf8f3',
      padding: '3rem 2rem',
      fontFamily: 'Lora, serif',
    }}>
      <div style={{
        maxWidth: '1600px',
        margin: '0 auto',
      }}>
        {/* HEADER */}
        <div style={{
          marginBottom: '3rem',
          paddingBottom: '2rem',
          borderBottom: '2px solid #e5d9c9',
        }}>
          <h1 style={{
            fontSize: '2.8rem',
            fontWeight: '700',
            color: '#1a1a1a',
            margin: '0 0 0.5rem 0',
            letterSpacing: '-0.02em',
            fontFamily: 'Play, sans-serif',
          }}>
            My Bottles Cabinet
          </h1>
          <p style={{
            fontSize: '1rem',
            color: '#6b7280',
            margin: 0,
            fontWeight: '400',
          }}>
            A curated exploration of 40+ spirits that make exceptional cocktails
          </p>
        </div>

        {/* INTRO STORY */}
        <div style={{
          backgroundColor: '#ebe9d1',
          borderLeft: '4px solid #bca88d',
          padding: '2rem',
          marginBottom: '3rem',
          borderRadius: '4px',
          maxWidth: '800px',
        }}>
          <p style={{
            fontSize: '1.05rem',
            lineHeight: '1.8',
            color: '#2d2d2d',
            margin: '0 0 1rem 0',
            fontWeight: '500',
          }}>
            <strong>The most important thing about building a spirits cabinet is that it takes time—a lot of time.</strong>
          </p>
          <p style={{
            fontSize: '1rem',
            lineHeight: '1.7',
            color: '#4b5563',
            margin: '0 0 1rem 0',
          }}>
            Each cocktail recipe requires 1-2 different types of spirits, liqueurs, syrups, bitters, and more. After years of building, I can make about 80% of the recipes I see.
          </p>
          <p style={{
            fontSize: '1rem',
            lineHeight: '1.7',
            color: '#4b5563',
            margin: 0,
          }}>
            I've organized my collection into three clear categories: <strong>Work Bottles</strong> (daily use, best value), <strong>Secondary Circle</strong> (special upgrades), and <strong>Impression Bottles</strong> (collectibles with character).
          </p>
        </div>

        {/* SPIRIT GROUPS */}
        <div>
          {spiritGroups.map((group) => {
            const groupBottles = bottles.filter(b => b.category === group.category);
            return (
              <div key={group.category} style={{ marginBottom: '4rem' }}>
                {/* GROUP HEADER */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <h2 style={{
                    fontSize: '1.4rem',
                    fontWeight: '600',
                    color: '#1a1a1a',
                    margin: '0 0 0.5rem 0',
                    paddingLeft: '0.5rem',
                    borderLeft: '3px solid #bca88d',
                    fontFamily: 'Play, sans-serif',
                  }}>
                    {group.emoji} {group.title}
                  </h2>
                  <p style={{
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                    color: '#6b7280',
                    margin: '0.8rem 0 0 0',
                    padding: '1rem',
                    backgroundColor: 'rgba(235, 233, 209, 0.5)',
                    borderLeft: '2px solid #d4a574',
                    borderRadius: '3px',
                    maxWidth: '700px',
                  }}>
                    {group.context}
                  </p>
                </div>

                {/* BOTTLES GRID */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))',
                  gap: '1.2rem',
                  marginBottom: '2rem',
                  position: 'relative',
                }}>
                  {groupBottles.map((bottle) => (
                    <div
                      key={bottle.id}
                      onMouseEnter={() => setHoveredBottle(bottle)}
                      onMouseLeave={() => setHoveredBottle(null)}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        cursor: 'pointer',
                        padding: '1rem',
                        borderRadius: '8px',
                        border: hoveredBottle?.id === bottle.id ? '2px solid #bca88d' : '1px solid transparent',
                        backgroundColor: hoveredBottle?.id === bottle.id ? '#f0ede5' : 'transparent',
                        transition: 'all 0.2s ease',
                        position: 'relative',
                      }}
                    >
                      {/* BOTTLE SHAPE */}
                      <div
                        style={{
                          width: '40px',
                          height: '100px',
                          background: getBottleColor(bottle.category),
                          borderRadius: '2px 2px 12px 12px',
                          marginBottom: '0.8rem',
                          boxShadow: hoveredBottle?.id === bottle.id
                            ? 'inset -2px 0 6px rgba(0,0,0,0.15), 0 2px 8px rgba(0,0,0,0.1)'
                            : 'inset -1px 0 3px rgba(0,0,0,0.1)',
                          position: 'relative',
                          overflow: 'hidden',
                        }}
                      >
                        {/* BOTTLE HIGHLIGHT */}
                        <div
                          style={{
                            position: 'absolute',
                            top: '5%',
                            left: '10%',
                            width: '8px',
                            height: '30%',
                            background: 'linear-gradient(90deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 100%)',
                            borderRadius: '4px',
                            opacity: 0.8,
                          }}
                        />
                      </div>

                      {/* LABEL */}
                      <div style={{
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        textAlign: 'center',
                        width: '140%',
                        wordBreak: 'break-word',
                        lineHeight: '1.3',
                        color: '#2d2d2d',
                        marginTop: '0.2rem',
                        minHeight: '2.4rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        {bottle.name}
                      </div>

                      {/* TIER BADGE */}
                      {getTierInfo(bottle.tier) && (
                        <div style={{
                          marginTop: '0.4rem',
                          fontSize: '0.5rem',
                          padding: '2px 4px',
                          backgroundColor: getTierInfo(bottle.tier).color,
                          color: getTierInfo(bottle.tier).textColor,
                          borderRadius: '2px',
                          fontWeight: '700',
                        }}>
                          {getTierInfo(bottle.tier).icon}
                        </div>
                      )}
                    </div>
                  ))}

                  {/* HOVER TOOLTIP */}
                  {hoveredBottle && groupBottles.some(b => b.id === hoveredBottle.id) && (
                    <div style={{
                      position: 'absolute',
                      bottom: '-280px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: '#ffffff',
                      border: '1px solid #e5d9c9',
                      borderRadius: '8px',
                      padding: '1.2rem',
                      width: '280px',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                      zIndex: 100,
                      animation: 'fadeInUp 0.2s ease-out',
                      pointerEvents: 'none',
                    }}>
                      {/* NAME */}
                      <h3 style={{
                        fontSize: '0.95rem',
                        fontWeight: '700',
                        color: '#1a1a1a',
                        margin: '0 0 0.4rem 0',
                        fontFamily: 'Play, sans-serif',
                      }}>
                        {hoveredBottle.name}
                      </h3>

                      {/* TIER BADGE */}
                      {getTierInfo(hoveredBottle.tier) && (
                        <div style={{
                          display: 'inline-block',
                          fontSize: '0.65rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          backgroundColor: getTierInfo(hoveredBottle.tier).color,
                          color: getTierInfo(hoveredBottle.tier).textColor,
                          padding: '0.25rem 0.6rem',
                          borderRadius: '3px',
                          marginBottom: '0.8rem',
                          fontWeight: '700',
                        }}>
                          {getTierInfo(hoveredBottle.tier).icon} {getTierInfo(hoveredBottle.tier).label}
                        </div>
                      )}

                      {/* DESCRIPTION */}
                      <p style={{
                        fontSize: '0.85rem',
                        lineHeight: '1.5',
                        color: '#4b5563',
                        margin: '0.8rem 0 0.8rem 0',
                      }}>
                        {hoveredBottle.desc}
                      </p>

                      {/* PRICE */}
                      <div style={{
                        backgroundColor: '#f0e8dd',
                        padding: '0.6rem 0.8rem',
                        borderRadius: '4px',
                        fontWeight: '700',
                        color: '#1a1a1a',
                        fontSize: '0.85rem',
                        display: 'inline-block',
                      }}>
                        {hoveredBottle.price}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
      `}</style>

    </div>
  );
};

export default BottlesCabinet;
