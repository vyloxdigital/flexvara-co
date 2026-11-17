FlexVara Co — images folder
===========================

Drop your nine image files into this folder, using these exact filenames.
The page references these and nothing else.

File                                  Used where                       Rendered box    Suggested source size
------------------------------------  -------------------------------  --------------  ---------------------
flexvara-2-bottles-guarantee.webp     Hero (LCP) + 2-bottle price row   540 x 540 (1:1)  1080 x 1080
flexvara-6-bottles-guarantee.webp     6-bottle price row                420 x 420 (1:1)   840 x 840
flexvara-3-bottles-guarantee.webp     3-bottle price row                420 x 420 (1:1)   840 x 840
flexvara-review-1.webp                Close-up gallery, first           540 x 405 (4:3)  1080 x 810
flexvara-review-2.webp                Close-up gallery, second          540 x 405 (4:3)  1080 x 810
flexvara-review-3.webp                Close-up gallery, third           540 x 405 (4:3)  1080 x 810
flexvara-guarantee.webp               Returns section seal              420 x 420 (1:1)   840 x 840
flexvara-bonus-1.webp                 Newsletter bonus                  420 x 560 (3:4)   840 x 1120
favicon.png                           Browser tab + app icon            any              512 x 512

Notes
-----

1. Every image slot uses a fixed CSS aspect-ratio with object-fit: contain.
   Your real files do NOT have to match the ratios above exactly: nothing
   stretches or crops, and the layout will not shift while images load
   (cumulative layout shift stays at zero). Matching the ratio only makes
   the box sit more tightly around the artwork.

2. IMPORTANT — the hero image on this site is the TWO-bottle file.
   Across your three FlexVara sites the preloaded LCP image differs:

       flexvara-us.vercel.app   hero = flexvara-3-bottles-guarantee.webp
       us-flexvara.vercel.app   hero = flexvara-6-bottles-guarantee.webp
       flexvara-co.vercel.app   hero = flexvara-2-bottles-guarantee.webp   <- this site

   Whichever file is the hero on a given site should be the most heavily
   compressed one there, ideally under 60 KB. Every other image on the page
   is lazy-loaded and matters far less.

3. Keep the .webp extension. The filenames appear in index.html, sitemap.xml
   and the Open Graph / Twitter meta tags; renaming one means editing three.

4. favicon.png should be a square PNG. 512 x 512 covers both the browser tab
   and the Android home-screen icon declared in manifest.json.

5. Export WebP at quality 78-82. Past that the file grows without a visible
   gain at these rendered sizes.
