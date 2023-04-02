export const MENU_CARLITOS = [
  {
    categoria: 'Entradas',
    category: 'Appetizers',
    items: [
      {
        nombre: 'Guacamole',
        desc: 'Aguacate, cebolla, tomate, cilantro, lechuga y queso fresco mezclado para crear una delicia mexicana.',
        descEng:
          'Avocado, onion, tomato, coriander, lettuce and cheese mixed together to create a traditional mexican dish.',
        precio: 179,
        slug: 'guacamole',
      },
      {
        nombre: 'Nachos',
        desc: 'Totopos crujientes y calientes acompañados de queso gouda, queso cheddar, jalapeño, pico de gallo y frijoles.',
        descEng:
          'Crunchy and hot tortilla chips with gouda cheese, cheddar cheese, jalapeños, pico de gallo and beans.',
        precio: 190,
        slug: 'nachos',
        variantes: [
          {
            nombre: 'Pollo',
            name: 'Chicken',
            precio: 200,
          },
          {
            nombre: 'Arrachera',
            name: 'Flank Steak',
            precio: 250,
          },
        ],
      },
      {
        nombre: 'Aguachile',
        desc: 'Camarones, chiles frescos, limón, tiras de cebolla y tiras de pepino.',
        descEng:
          'Shrimp, fresh chillies, lemon, onion strips and cucumber strips.',
        precio: 385,
      },
      {
        nombre: 'Cóctel de Camarón',
        name: 'Shrimp Cocktail',
        desc: 'Camarones servidos con nuestra sabrosa salsa coctelera, cebolla, cilantro y aguacate.\nServido con totopos o galletas saladas.',
        descEng:
          'Shrimp served with our cocktail sauce, onion, coriander and avocado.\nServed with tortilla chips or salty crackers.',
        precio: 330,
        slug: 'coctel-de-camaron',
      },
      {
        nombre: 'Ceviche de Camarón',
        name: 'Shrimp Ceviche',
        desc: 'Camarones marinados con jugo de limón y pico de gallo.\nServido con totopos o galletas saladas.',
        descEng:
          'Shrimp ceviche marinated with lemon juice and pico de gallo.\nServed with tortilla chips or salty crackers.',
        precio: 330,
        slug: 'ceviche',
      },
    ],
  },
  {
    categoria: 'Ensaladas',
    category: 'Salads',
    items: [
      {
        nombre: 'César',
        desc: 'Ensalada de lechuga romana y croutons(trozos de pan tostado) y aderezo cesar.',
        descEng:
          'Salad of romaine lettuce and croutons(pieces of toasted bread) and caesar dressing.',
        precio: 210,
        slug: 'cesar',
        adicionales: [
          {
            nombre: 'Con Pollo',
            name: 'With Chicken',
            precio: 259,
          },
        ],
      },
    ],
  },
  {
    categoria: 'Sopas',
    category: 'Soups',
    items: [
      {
        nombre: 'Sopa de Lima',
        name: 'Lime Soup',
        desc: 'Un caldo ligero de pollo, acompañado de verduras, pollo desmenuzado, lima y tiras de tortilla frita.',
        descEng:
          'A light chicken broth, with vegetables, shredded chicken, lime and fried tortilla strips.',
        precio: 180,
      },
    ],
  },
  {
    categoria: 'Pescados y Mariscos',
    category: 'Seafood',
    items: [
      {
        nombre: 'Filete de Pescado',
        name: 'Fish Steak',
        desc: 'A elegir a la plancha, al mojo de ajo o empanizado. Acompañado de arroz, verduras al vapor o ensalada.',
        descEng: 'Grilled with garlic. With rice, steamed vegetables or salad.',
        precio: 285,
        slug: 'filete-empanizado',
      },
      {
        nombre: "Camarones Karen's",
        name: "Shrimps Karen's",
        desc: 'Elegir a la plancha, empanizados o al mojo de ajo. Acompañados de arroz, verduras al vapor o ensalada.',
        descEng:
          'Grilled, breaded or with garlic sauce. With rice, steamed vegetables or salad',
        precio: 459,
      },
      {
        nombre: 'Camarones al Coco',
        name: 'Coconut Shrimps',
        desc: 'Camarones empanizados con coco, sobre una cama de puré de papa. Acompañado de salsa de tamarindo y verduras al vapor.',
        descEng:
          'Cononut breaded shrimp, laid on top of mashed potatoes. With tamarind sauce and steamed vegetables.',
        precio: 459,
      },
      {
        nombre: 'Camarones a la Diabla Jumbo',
        name: 'Jumbo Size Diabla Shrimps',
        desc: 'Flameados en su mesa con cebolla, ajo, vino blanco, brandy, bisque de camarón y chipotle al gusto. Acompañado de fideos fritos.',
        descEng:
          'Flamed at your table with onion, garlic, white wine, brandy, shrimp bisque and chipotle to taste. With fried noodles.',
        variantes: [{ nombre: "Karen's Size", precio: 459 }],
        slug: 'camarones-a-la-diabla',
      },
    ],
  },
  {
    categoria: 'Steak House',
    items: [
      {
        nombre: 'Arrachera Norteña',
        name: 'Northern Flank Steak',
        desc: 'Arrachera al grill y acompañada con papa al hornoo puré de papa, verduras al vapor y cebollas cambray asadas.',
        descEng:
          'Grilled flank steak served with baked potato or mashed potato, steamed vegetables and grilled onions.',
        precio: 390,
        slug: 'arrachera',
      },
      {
        nombre: 'Costillas BBQ',
        name: 'BBQ Ribs',
        desc: 'Costillas de cerdo en salsa BBQ, horneadas, acompañadas con elote dulce, papa al horno y verduras al vapor.',
        precio: 390,
        slug: 'costillas-bbq',
      },
      {
        nombre: 'Rib Eye (14 oz./400 gr.)',
        desc: 'Al grill y acompañado de papa al horno o puré de papa, verduras al vapor o ensalada.',
        descEng:
          'Grilled and accompanied by baked potatoes or mashed potatoes, with steamed vegetables or salad',
        precio: 689,
      },
    ],
  },
  {
    categoria: 'Molcajetes',
    items: [
      {
        nombre: 'Molcajete',
        desc: 'Molcajete bañado en salsa ranchera, cebollas cambray, aguacate, queso panela, chile güero, cilantro y nopales.',
        descEng:
          'Molcajete with ranchero sauce, cambray onions, avocado, panela cheese, chile güero, coriander and nopales.',
        variantes: [
          {
            nombre: 'Pollo',
            name: 'Chicken',
            precio: 320,
          },
          {
            nombre: 'Arrachera',
            name: 'Flank Steak',
            precio: 380,
          },
          {
            nombre: 'Camarón',
            name: 'Shrimp',
            precio: 480,
          },
          {
            nombre: 'Mixto con Camarón',
            name: 'Mixed with Shrimp',
            desc: 'Camarón, Arrachera, Pollo',
            descEng: 'Shrimp, Flank Steak, Chicken',
            precio: 460,
          },
          {
            nombre: 'Mixto',
            name: 'Mixed',
            desc: 'Arrachera, Pollo',
            descEng: 'Flank Steak, Chicken',
            precio: 415,
          },
        ],
        slug: 'molcajete',
      },
    ],
  },
  {
    categoria: 'Fajitas',
    items: [
      {
        nombre: 'Fajitas',
        desc: 'Asadas con pimiento verde, rojo y cebolla. Servidas con salsa verde de aguacate, salsa mexicana y arroz.',
        descEng:
          'Roasted with green, red pepper and onions. Served with avocado green sauce, mexican sauce and rice',
        variantes: [
          {
            nombre: 'Pollo',
            name: 'Chicken',
            precio: 349,
          },
          {
            nombre: 'Arrachera',
            name: 'Flank Steak',
            precio: 379,
          },
          {
            nombre: 'Camarón',
            name: 'Shrimp',
            precio: 479,
          },
          {
            nombre: 'Mixto',
            name: 'Mixed',
            desc: 'Camarón, Arrachera, Pollo',
            descEng: 'Shrimp, Flank Steak, Chicken',
            precio: 459,
          },
        ],
        slug: 'fajitas',
      },
    ],
  },
  {
    categoria: 'Tacos',
    items: [
      {
        nombre: 'Nuestros Tacos',
        desc: 'Acompañados de guacamole y pico de gallo (Orden de 4).',
        descEng: 'Served with guacamole and pico de gallo (Order of 4).',
        slug: 'tacos-de-camaron',
        variantes: [
          {
            nombre: 'Pollo',
            name: 'Chicken',
            precio: 245,
          },
          {
            nombre: 'Arrachera',
            name: 'Flank Steak',
            precio: 280,
          },
          {
            nombre: 'Pescado Empanizado',
            name: 'Breaded Fish',
            precio: 249,
          },
          {
            nombre: 'Camarón Empanizado',
            name: 'Breaded Shrimp',
            precio: 279,
          },
        ],
      },
      {
        nombre: 'Enchiladas Rojas o Mole',
        desc: 'Tortillas rellenas de pollo deshebrado, bañadas en mole o salsa ranchera (rojas) con queso fresco y crema. Acompañadas de arroz y frijol.',
        descEng:
          'Tortillas filled with shredded chicken, covered in mole or ranchera sauce (red) with fresh cheese and cream. Served with rice and beans.',
        precio: 289,
        slug: 'enchiladas',
      },
      {
        nombre: 'Enchiladas Suizas',
        desc: 'Tortillas rellenas de pollo deshebrado, bañadas en salsa verde y gratinadas con queso.',
        descEng:
          'Tortillas filled with shredded chicken, covered in a green sauce and grated melted cheese',
        precio: 289,
        slug: 'enchiladas-suizas',
      },
    ],
  },
  {
    categoria: 'Pollo',
    category: 'Chicken',
    items: [
      {
        nombre: 'Pechuga de Pollo a la Plancha',
        name: 'Grilled Chicken Breast',
        desc: 'Pechuga de pollo a la plancha acompañada de verduras al vapor y papa al horno.',
        descEng:
          'Grilled chicken breast with steamed vegetables and baked potato.',
        precio: 270,
      },
      {
        nombre: 'Pollo Parmesano',
        name: 'Parmesan Chicken',
        desc: 'Pechuga de pollo a la parmesana sobre una cama de salsa pomodoro. Acompañada de espagueti en salsa de tomate.',
        descEng:
          'Parmesan chicken on a bed of pomodoro sauce. Served with spaghetti in tomato sauce.',
        precio: 279,
      },
    ],
  },
  {
    categoria: 'Parrilladas',
    category: 'Grill BBQS',
    items: [
      {
        nombre: 'La Mexicana',
        desc: 'Costillas BBQ, arrachera, chorizo y pollo acompañada de verduras al vapor, nopales, elote y papa al horno.',
        descEng:
          'BBQ ribs, flank steak, mexican sausage and chicken with steamed vegetables, nopales, corn and baked potato.',
        variantes: [
          {
            nombre: '2 Personas',
            name: '2 People',
            precio: 910,
          },
        ],
      },
      {
        nombre: 'Mixta',
        name: 'Mixed',
        desc: 'Costillas BBQ, arrachera, pescado y camarones acompañada de verduras al vapor, papa al horno, nopales, elote, nopal y cebolla cambray.',
        descEng:
          'BBQ ribs, flank steak, fish and shrimp served with steamed vegetables, baked potato, corn, nopales and cambray onion.',
        variantes: [
          {
            nombre: '2 Personas',
            name: '2 People',
            precio: 1410,
          },
        ],
      },
      {
        nombre: 'De Mariscos',
        name: 'Seafood',
        desc: 'Pescado, camarón, langosta, calamar y mejillones acompañada de arroz y verduras.',
        descEng:
          'Fish, shrimp, lobster, squid and mussels with rice and vegetables.',
        variantes: [
          {
            nombre: '2 Personas',
            name: '2 People',
            precio: 1750,
          },
        ],
        slug: 'parrillada-de-mariscos',
      },
    ],
  },
  {
    categoria: 'Pastas',
    items: [
      {
        nombre: 'Boloñesa',
        desc: 'Espagueti o fetuccini con salsa de tomate a base de tomates frescos, carne de res y especias.',
        descEng:
          'Spaghetti or fettuccini with tomato sauce based on fresh tomatoes, beef and spices.',
        precio: 299,
      },
      {
        nombre: '3 Quesos',
        name: '3 Cheeses',
        desc: 'Espagueti o fetuccini con quesos gouda, azul y parmesano.',
        descEng:
          'Spaghetti or fettuccini with gouda, blue and parmesan cheeses.',
        precio: 330,
        variantes: [
          {
            nombre: 'Con Pollo',
            name: 'With Chicken',
            precio: 350,
          },
        ],
      },
      {
        nombre: 'Alfredo',
        desc: 'Espagueti o fetuccini con salsa cremosa a base de queso parmesano.',
        descEng:
          'Spaghetti or fettuccini with cream sauce and parmesan cheese.',
        precio: 330,
        variantes: [
          {
            nombre: 'Con Pollo',
            name: 'With Chicken',
            precio: 350,
          },
        ],
        slug: 'pasta-alfredo',
      },
    ],
  },
  {
    categoria: 'Snacks',
    items: [
      {
        nombre: 'K-Burro Pollo',
        name: 'Chicken K-Burro',
        precio: 229,
        slug: 'k-burro',
      },
      {
        nombre: 'K-Burro Arrachera',
        name: 'Flank Steak K-Burro',
        precio: 289,
        slug: 'k-burro',
      },
      {
        nombre: 'Hamburguesa Tex Mex',
        desc: 'Piña, tocino y queso',
        descEng: 'Pineapple, bacon and cheese',
        precio: 250,
      },
      {
        nombre: 'Hamburguesa Doble Queso',
        name: 'Double Cheese Burger',
        precio: 289,
      },
      {
        nombre: "Hamburguesa Karen's",
        name: "Karen's Burger",
        precio: 189,
      },
    ],
  },
  {
    categoria: 'Pizzas',
    items: [
      {
        nombre: 'Jamón',
        name: 'Ham',
        desc: 'Jamón y queso',
        descEng: 'Ham and cheese',
        precio: 260,
      },
      {
        nombre: 'Champiñones',
        name: 'Mushrooms',
        desc: 'Champiñones y queso',
        descEng: 'Mushrooms and cheese',
        precio: 260,
      },
      {
        nombre: 'Cozumel',
        desc: 'Jamón, salami y champiñones',
        descEng: 'Ham, salami and mushrooms',
        precio: 270,
      },
      {
        nombre: 'Hawaiana',
        desc: 'Jamón, queso y piña',
        descEng: 'Ham, cheese and pineapple',
        precio: 270,
      },
      {
        nombre: 'Pepperoni',
        desc: 'Pepperoni y queso',
        descEng: 'Pepperoni and cheese',
        precio: 270,
      },
      {
        nombre: 'Mexicana',
        desc: 'Chorizo, frijoles, tomate, cebolla y pimiento verde',
        descEng: 'Mexican sausage, beans, tomato, onion and green pepper',
        precio: 290,
        slug: 'pizza-mexicana',
      },
      {
        nombre: 'Camarones',
        name: 'Shrimps',
        desc: 'Camarones al mojo de ajo y queso',
        descEng: 'Shrimp with garlic and cheese',
        precio: 410,
      },
    ],
  },
  {
    categoria: 'Postres',
    category: 'Desserts',
    items: [
      {
        nombre: 'Cheesecake',
        desc: 'Servido con salsa de fresas',
        descEng: 'Served with strawberry sauce',
        precio: 120,
        slug: 'cheesecake',
      },
      {
        nombre: 'Flan de la casa',
        precio: 110,
        slug: 'flan',
      },
      {
        nombre: 'Plátano flameado',
        name: 'Banana Flambe',
        desc: 'Flameado en su mesa, con brandy, mantequilla, licor de plátano, jugo de naranja y canela.\nServido con helado de vainilla.',
        descEng:
          'Flamed at your table, with brandy, butter, banana liqueur, orange juice and cinamon.\nServed with vanilla ice cream.',
        precio: 170,
      },
    ],
  },
  {
    categoria: 'Cócteles',
    category: 'Cocktails',
    items: [
      {
        nombre: 'Sweet Caribbean Margarita',
        desc: 'Tequila, licor de melón, jugo de limón y jarabe natural',
        precio: 255,
      },
      {
        nombre: 'Miami Vice',
        desc: 'Ron, crema de coco, leche clavel, jugo de piña y concentrado de fresa',
        precio: 255,
      },
      {
        nombre: 'Electric Lemonade',
        desc: 'Jugo de limón, agua mineral, vodka, jarabe natural, curazao azul',
        precio: 255,
      },
      {
        nombre: 'Mojito',
        desc: 'Ron, jugo de limón, menta, azucar y agua mineral',
        precio: 255,
      },
      {
        nombre: 'Piña Colada',
        desc: 'Ron, crema de coco, jugo de piña y leche clavel',
        precio: 255,
      },
      {
        nombre: 'Daikiri de Mango',
        desc: 'Ron, jugo de limón y concentrado de mango',
        precio: 255,
      },
      {
        nombre: 'Riviera Maya',
        desc: 'Licor de melón, vodka, jarabe natural, jugo de naranja, ron y concentrado de fresa',
        precio: 255,
      },
      {
        nombre: 'Aperol Spritz',
        desc: 'Prosecco, aperol y agua mineral',
        precio: 230,
      },
      {
        nombre: 'Bulldog',
        desc: 'Tequila, triple sec, jugo de limón, jarabe natural y una cerveza',
        precio: 250,
      },
      {
        nombre: 'Golden Margarita',
        desc: 'Tequila (Don Julio Reposado), licor de naranja (Gran Marnier), jugo de limón, jarabe natural y jugo de naranja',
        precio: 380,
      },
      {
        nombre: 'Frida Khalo',
        desc: 'Ron, licor de cassis, jugo de naranja, jugo de limón y jugo de piña',
        precio: 255,
      },
      {
        nombre: 'Pancho Villa',
        desc: 'Mezcal, Ancho Reyes y jugo de piña',
        precio: 255,
      },
      {
        nombre: "Tropical Karen's",
        desc: 'Ron, Malibú, jugo de piña, curazao azul y vodka',
        precio: 255,
      },
      {
        nombre: 'ABC',
        desc: 'Amaretto, licor de almendras, Baileys y Cognac',
        precio: 180,
      },
      {
        nombre: 'Royal Flash',
        desc: "Whiskey (Jack Daniel's), licor de durazno y jugo de arándano",
        precio: 180,
      },
      {
        nombre: 'Perla Negra',
        desc: 'Jaggermaister y Boost',
        precio: 220,
      },
      {
        nombre: 'Gin Tonic',
        desc: 'Ginebra (Tanqueray) y agua quina',
        precio: 250,
      },
      {
        nombre: "Yarda Karen's",
        precio: 255,
      },
      {
        nombre: 'Tarro Jumbo',
        precio: 250,
      },
    ],
  },
  {
    categoria: 'Bebidas',
    category: 'Drinks',
    bebidas: [
      {
        subCategoria: 'Cervezas',
        subCategory: 'Beers',
        bebidaItems: [
          {
            nombres: [
              'Sol',
              'XX Lager',
              'XX Ambar',
              'Tecate',
              'Tecate Light',
              'Indio',
              'Corona',
            ],
            precio: 75,
          },
          {
            nombres: [
              'Bohemia Clara',
              'Bohemia Obscura',
              'Heineken',
              'Amstel Ultra',
            ],
            precio: 85,
          },
        ],
      },
      {
        subCategoria: 'Tropical Cocktails',
        bebidaItems: [
          {
            nombres: [
              'Margarita Mango',
              'Margarita Fresa',
              'Piña Colada',
              'Daiquiri Mango',
              'Daiquiri Fresa',
              'Mojito',
            ],
            precio: 150,
          },
          {
            nombre: "Mimosa Karen's",
            precio: 190,
          },
        ],
      },
      {
        subCategoria: 'Mezcal',
        bebidaItems: [
          {
            nombre: 'El Recuerdo de Oaxaca',
            precio: 190,
          },
          {
            nombre: '400 Conejos Joven',
            precio: 190,
          },
        ],
      },
      {
        subCategoria: 'Tequila',
        bebidaItems: [
          {
            nombre: 'José Cuervo Especial',
            precio: 135,
          },
          {
            nombre: 'José Cuervo Tradicional',
            precio: 200,
          },
          {
            nombre: 'Hornitos Rep.',
            precio: 155,
          },
          {
            nombre: 'Jimador Rep.',
            precio: 155,
          },
          {
            nombre: 'Cazadores Rep.',
            precio: 175,
          },
          {
            nombre: 'Don Julio Blanco',
            precio: 200,
          },
          {
            nombre: 'Tequila 1800 Añejo',
            precio: 200,
          },
          {
            nombre: 'Herradura Plata',
            precio: 200,
          },
          {
            nombre: 'Don Julio Rep.',
            precio: 200,
          },
          {
            nombre: 'Herradura Rep.',
            precio: 200,
          },
          {
            nombre: 'Don Julio 70',
            precio: 280,
          },
          {
            nombre: 'Patrón Rep.',
            precio: 280,
          },
        ],
      },
      {
        subCategoria: 'Ron',
        subCategory: 'Rum',
        bebidaItems: [
          {
            nombre: 'Bacardi Añejo',
            precio: 130,
          },
          {
            nombre: 'Bacardi Limón',
            precio: 130,
          },
          {
            nombre: 'Bacardi Blanco',
            precio: 130,
          },
          {
            nombre: 'Bacardi Solera',
            precio: 145,
          },
          {
            nombre: 'Captain Morgan',
            precio: 190,
          },
          {
            nombre: 'Appleton Special',
            precio: 190,
          },
          {
            nombre: 'Havana Club 7 Años',
            precio: 210,
          },
          {
            nombre: 'Havana 3 Años Añejo',
            precio: 190,
          },
          {
            nombre: 'Malibú',
            precio: 200,
          },
        ],
      },
      {
        subCategoria: 'Brandy',
        bebidaItems: [
          {
            nombre: 'Presidente',
            precio: 120,
          },
          {
            nombre: 'Don Pedro',
            precio: 130,
          },
          {
            nombre: 'Fundador',
            precio: 160,
          },
          {
            nombre: 'Terry',
            precio: 170,
          },
          {
            nombre: 'Azteca de Oro',
            precio: 190,
          },
          {
            nombre: 'Torres 10',
            precio: 200,
          },
        ],
      },
      {
        subCategoria: 'Whisky',
        bebidaItems: [
          {
            nombre: "Buchanans's 12",
            precio: 235,
          },
          {
            nombre: 'Johnnie W. BL',
            precio: 235,
          },
          {
            nombre: 'Johnnie W. RL',
            precio: 190,
          },
          {
            nombre: 'Jim Beam',
            precio: 235,
          },
          {
            nombre: 'Chivas Regal 12',
            precio: 235,
          },
          {
            nombre: 'Canadian Club',
            precio: 199,
          },
          {
            nombre: "Jack Daniel's",
            precio: 210,
          },
          {
            nombre: 'J & B',
            precio: 189,
          },
        ],
      },
      {
        subCategoria: 'Vodka',
        bebidaItems: [
          {
            nombre: 'Smirnoff',
            precio: 130,
          },
          {
            nombre: 'Wyborowa',
            precio: 150,
          },
          {
            nombre: "Tito's",
            precio: 170,
          },
          {
            nombre: 'Absolut Azul',
            precio: 170,
          },
          {
            nombre: 'Absolut Citron',
            precio: 170,
          },
          {
            nombre: 'Absolut Mandarina',
            precio: 170,
          },
          {
            nombre: 'Stolichnaya',
            precio: 170,
          },
          {
            nombre: 'Grey Goose',
            precio: 260,
          },
        ],
      },
      {
        subCategoria: 'Cognac',
        bebidaItems: [
          {
            nombre: 'Courvoisier\n(Very Superior Old Pale)',
            precio: 325,
          },
          {
            nombre: 'Hennesy\n(Very Superior Old Pale)',
            precio: 325,
          },
          {
            nombre: 'Martell\n(Very Superior Old Pale)',
            precio: 325,
          },
        ],
      },
      {
        subCategoria: 'Ginebra',
        subCategory: 'Gin',
        bebidaItems: [
          {
            nombre: 'Beerfeater',
            precio: 220,
          },
          {
            nombre: 'Tanqueray',
            precio: 220,
          },
          {
            nombre: 'Bombay Sapphire',
            precio: 220,
          },
        ],
      },
      {
        subCategoria: 'Licores',
        subCategory: 'Liquors',
        bebidaItems: [
          {
            nombre: 'Kahlúa',
            precio: 150,
          },
          {
            nombre: 'Xtabentún',
            precio: 150,
          },
          {
            nombre: 'Baileys',
            precio: 190,
          },
          {
            nombre: 'Galeano',
            precio: 190,
          },
          {
            nombre: 'Licor 43',
            precio: 150,
          },
          {
            nombre: 'Amaretto Disaronno',
            precio: 250,
          },
          {
            nombre: 'Anís Chinchón Dulce',
            precio: 180,
          },
          {
            nombre: 'Sambuca',
            precio: 180,
          },
          {
            nombre: 'Jagermeister',
            precio: 190,
          },
        ],
      },
      {
        subCategoria: 'Vino (Copa)',
        subCategory: 'Wine (Glass)',
        bebidaItems: [
          {
            nombre: 'Cabernet Sauvignon',
            precio: 200,
          },
          {
            nombre: 'Sauvignon Blanc',
            precio: 200,
          },
          {
            nombre: 'Merlot',
            precio: 200,
          },
          {
            nombre: 'Chardonnay',
            precio: 200,
          },
          {
            nombre: 'Prosecco',
            precio: 220,
          },
        ],
      },
      {
        subCategoria: 'Bebidas',
        subCategory: 'Drinks',
        bebidaItems: [
          {
            nombre: 'Café',
            precio: 60,
          },
          {
            nombre: 'Café Espresso',
            precio: 80,
          },
          {
            nombre: 'Refrescos Emb. / Sodas',
            precio: 70,
          },
          {
            nombre: 'Cappuccino',
            precio: 95,
          },
          {
            nombre: 'Café Maya',
            precio: 175,
          },
        ],
      },
      {
        subCategoria: 'Otras',
        bebidaItems: [
          {
            nombre: 'Limonada',
            precio: 70,
            precioGde: 110,
          },
          {
            nombre: 'Naranjada',
            precio: 70,
            precioGde: 110,
          },
          {
            nombre: 'Aguas Frescas',
            precio: 70,
            precioGde: 110,
          },
        ],
      },
    ],
  },
];
