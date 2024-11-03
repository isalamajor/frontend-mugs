const lista_productos = [
  {
    name: 'Frog Mug',
    description: 'A fun frog mug that will make anyone smile',
    price: '12',
    pic: 'frog-mug.png',
    long_description: 'Hop into your morning with this whimsical frog mug that brings a playful energy to your day! Holding up to 350ml, this cheerful mug is perfect for coffee, tea, or any favorite drink.\n\nThe deep green glaze with a lily pad-inspired coaster adds an authentic frog feel, while the ergonomic handle is designed for comfort. Microwave and dishwasher safe, this mug is both durable and easy to clean.\n\nThis quirky piece is sure to bring smiles and start conversations, making it a delightful addition to any mug collection.'
  },
  {
    name: 'Cat Mug',
    description: 'A charming cat mug design that cat lovers adore',
    price: '10',
    pic: 'cat-mug.png',
    long_description: 'Perfect for cat enthusiasts, this 300ml ceramic mug captures the spirit of feline charm with a cute cat face and 3D ears that extend above the rim.\n\nWith a lightweight yet durable build, it’s safe for both microwaving and dishwashing, ensuring low-maintenance enjoyment. The included matching lid, featuring adorable whiskers and nose, helps keep your drink warm for longer and prevents spills.\n\nPerfect for coffee or tea, this cat mug makes every sip a cozy moment while bringing a touch of cuteness to your kitchen.'
  },
  {
    name: 'Dog Mug',
    description: 'The perfect mug for dog lovers, ideal for enjoying their favorite drink',
    price: '11',
    pic: 'dog-mug.png',
    long_description: 'This 350ml dog mug is designed with a charming paw-print pattern, making it the perfect companion for pet lovers.\n\nCrafted from high-quality ceramic, it is both microwave and dishwasher safe for hassle-free use. With its gentle curved handle, this mug offers a comfortable grip, ideal for long mornings with your coffee or tea.\n\nEach mug includes a delightful, bone-shaped stirrer, adding an extra playful touch to your coffee ritual. Great as a gift or a cozy treat for yourself, this mug brings warmth and joy to every sip.'
  },
  {
    name: 'Owl Mug',
    description: 'An elegant owl design mug, perfect for night owls',
    price: '14',
    pic: 'owl-mug.png',
    long_description: 'Stay wise and stylish with this beautifully crafted 400ml owl mug. Featuring an elegant owl design with intricate feather details, this mug is perfect for large coffee servings or a comforting hot chocolate.\n\nMade from heat-resistant ceramic, it’s both microwave and dishwasher friendly, ensuring easy maintenance. The wooden lid, with its natural grain and owl engraving, doubles as a coaster to keep your surfaces safe.\n\nIdeal for late-night sips or early morning coffee, this owl mug is as functional as it is visually stunning, bringing a touch of nature to your kitchen.'
  },
  {
    name: 'Panda Mug',
    description: 'An adorable panda mug that will charm everyone who sees it',
    price: '13',
    pic: 'panda-mug.png',
    long_description: 'This 300ml panda mug combines cuteness with practicality, featuring a black and white panda face with charming ear details on the rim.\n\nThe bamboo-shaped handle gives it a unique, eco-friendly vibe, while its durable ceramic material ensures it’s microwave and dishwasher safe. Each mug includes a small bamboo spoon that complements the panda theme, perfect for stirring honey or sugar into your drink.\n\nThis adorable mug is sure to be a favorite among animal lovers and brings a playful, nature-inspired touch to your beverage experience.'
  },
  {
    name: 'Tiger Mug',
    description: 'A fierce tiger design mug that will make your mornings more exciting',
    price: '15',
    pic: 'tiger-mug.jpg',
    long_description: 'Unleash your inner strength with this 350ml tiger mug, crafted to bring a wild edge to your daily coffee or tea.\n\nFeaturing bold orange and black tiger stripes, it’s made from premium ceramic for long-lasting durability. Safe for the microwave and dishwasher, this mug is easy to clean and maintain, even with its vibrant pattern.\n\nThe bamboo coaster, included with each mug, protects your table and keeps your drink steady. Ideal for morning motivation or a mid-afternoon boost, this fierce mug stands out as a unique addition to any kitchen.'
  },
  {
    name: 'Unicorn Mug',
    description: 'A magical unicorn mug that brings a touch of fantasy to your day',
    price: '16',
    pic: 'unicorn-mug.jpg',
    long_description: 'Step into a world of fantasy with this enchanting 350ml unicorn mug, designed to make every sip magical.\n\nWith a soft pastel rainbow finish and a sparkling golden horn on the handle, this mug captures the beauty of unicorns. It’s microwave and dishwasher safe, so you can enjoy it hassle-free, and it includes a matching spoon topped with a rainbow unicorn charm.\n\nWhether you’re sipping tea or cocoa, this unicorn mug is sure to bring wonder and joy, making it a beloved addition for fantasy lovers of all ages.'
  },
  {
    name: 'Dinosaur Mug',
    description: 'A fun dinosaur mug, perfect for prehistory lovers',
    price: '12',
    pic: 'dinosaur-mug.jpg',
    long_description: 'Take a sip of history with this 300ml dinosaur mug, ideal for both children and adults who adore the prehistoric era.\n\nFeaturing an earthy green color and dinosaur footprint details around the base, it’s microwave and dishwasher safe for convenience. The ceramic material provides lasting quality, and it comes with a mini dinosaur keychain as a bonus.\n\nPerfect for adding a bit of adventure to your daily drink, this mug is sure to delight anyone with a love for dinosaurs and natural history.'
  },
  {
    name: 'Robot Mug',
    description: 'A futuristic robot mug that will make your coffee taste even better',
    price: '17',
    pic: 'robot-mug.png',
    long_description: 'Step into the future with this 350ml robot mug, featuring metallic accents and a minimalist robot design.\n\nIts durable ceramic build ensures that it’s microwave and dishwasher safe, so you can enjoy it hassle-free. Designed for tech enthusiasts, this mug also includes a small cleaning brush to keep the metallic finish pristine.\n\nWith its unique look and feel, this robot mug is perfect for anyone who loves innovation and technology, making each coffee break feel like a futuristic experience.'
  },
  {
    name: 'Coffee Mug',
    description: 'Classic coffee mug, perfect for starting the day with energy',
    price: '8',
    pic: 'coffee-mug.png',
    long_description: 'This 300ml coffee mug is the epitome of simplicity and functionality.\n\nWith a classic white ceramic design, it’s versatile enough to suit any beverage and is safe for both microwave and dishwasher use. Lightweight yet sturdy, it’s ideal for daily use and makes a reliable companion for your morning routine.\n\nEach mug comes with a coffee scoop for precise measurements, making it easier than ever to start your day with the perfect brew. A timeless addition to any kitchen, this coffee mug is all about classic comfort and reliability.'
  },
  {
    name: 'Tea Mug',
    description: 'The perfect tea mug to enjoy every sip',
    price: '9',
    pic: 'tea-mug.png',
    long_description: 'Tailored for tea lovers, this 250ml tea mug offers an elegant, timeless design and includes a stainless steel infuser for loose-leaf tea.\n\nMade from high-quality ceramic, it’s microwave and dishwasher safe, ensuring easy cleaning and maintenance. The gentle, curved handle and light floral design enhance the tea experience, making every sip feel like a moment of tranquility.\n\nWhether you prefer black, green, or herbal tea, this mug is a charming addition to your collection and perfect for cozy tea sessions.'
  },
  {
    name: 'Rainbow Mug',
    description: 'A colorful rainbow design mug that will brighten up your table',
    price: '14',
    pic: 'rainbow-mug.png',
    long_description: 'Bring color and joy to your day with this vibrant 350ml rainbow mug.\n\nCrafted from durable ceramic, this mug’s bright pattern remains vivid over time, even with regular dishwasher use. Its microwave-safe build means it’s as practical as it is cheerful.\n\nEach mug includes a matching lid that can double as a coaster, helping to keep your surfaces clean and drink warm. Perfect for brightening up your kitchen or as a gift, this rainbow mug is an uplifting piece that adds a pop of color to your routine.'
  },
];

export default lista_productos;
