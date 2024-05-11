import trendingImg1 from '../assests/Products/Trending/1.nutristar-so-isolate-low.png';
import trendingImg2 from '../assests/Products/Trending/2.nutristar-performance-.png'
import trendingImg3 from '../assests/Products/Trending/3.avvatar-whey-protein.png'
import trendingImg4 from '../assests/Products/Trending/4.optimum-nutrition-on.png'
import trendingImg5 from '../assests/Products/Trending/5.ultimate-nutrition-iso.png'
import trendingImg6 from '../assests/Products/Trending/6.ronnie-coleman-signature.png'
import trendingImg7 from '../assests/Products/Trending/7.one-science-premium.png'
import trendingImg8 from '../assests/Products/Trending/8.myprotein-gallon.png'

import bestSellerImg1 from '../assests/Products/Bestseller/1.nutristar-ultra-premium.png';
import bestSellerImg2 from '../assests/Products/Bestseller/2.muscletech.png'
import bestSellerImg3 from '../assests/Products/Bestseller/3.ultimate-nutrition.png'
import bestSellerImg4 from '../assests/Products/Bestseller/4.dymatize-elite-100percent.png'
import bestSellerImg5 from '../assests/Products/Bestseller/5.bsn-syntha-6.jpeg'
import bestSellerImg6 from '../assests/Products/Bestseller/6.scivation-xtend.png'
import bestSellerImg7 from '../assests/Products/Bestseller/7.bsn-syntha-6.jpeg'
import bestSellerImg8 from '../assests/Products/Bestseller/8.labrada-muscle.png'


const productsData = [
    {
        _id: 1111,
        heading: "trending",
        data: [
            {
                title: "Nutristar So Isolate Low Carb ultra-filtered 58 Servings, 4 Lbs (1.81Kg)",
                discountPercentage: 41,
                rating: 4.8,
                oldPrice: 8999,
                newPrice: 5295,
                image: trendingImg1
            },
            {
                title: "Nutristar Performance Whey Advanced 100% Whey Protein - 4.4 Lbs (1+1 =2 Kg)",
                discountPercentage: 50,
                rating: null,
                oldPrice: 5998,
                newPrice: 2999,
                image: trendingImg2
            },
            {
                title: "Avvatar Whey Protein Powder - 2 Kg",
                discountPercentage: 38,
                rating: 4.7,
                oldPrice: 7199,
                newPrice: 4475,
                image: trendingImg3
            },
            {
                title: "Optimum Nutrition (ON) Gold Standard 100% Whey 5 Lbs ( + 10 % Extra)",
                discountPercentage: 16,
                rating: 4.7,
                oldPrice: 8099,
                newPrice: 6795,
                image: trendingImg4
            },
            {
                title: "Ultimate Nutrition ISO Sensation 93-5 Lbs",
                discountPercentage: 39,
                rating: 5,
                oldPrice: 10999,
                newPrice: 6695,
                image: trendingImg5
            },
            {
                title: "Ronnie Coleman Signature Series Pro Antium - 5 Lbs",
                discountPercentage: 30,
                rating: null,
                oldPrice: 9299,
                newPrice: 6495,
                image: trendingImg6
            },
            {
                title: "One Science Premium Whey Protein - 5 Lbs",
                discountPercentage: 38,
                rating: 4.7,
                oldPrice: 8499,
                newPrice: 5295,
                image: trendingImg7
            },
            {
                title: "MyProtein Impact Whey 100 Servings, 2.5 kg",
                discountPercentage: 43,
                rating: 4.8,
                oldPrice: 9999,
                newPrice: 5695,
                image: trendingImg8
            }
        ]
    },
    {
        _id: 1112,
        heading: "Best Sellers",
        data: [
            {
                title: "Nutristar Ultra Premium Whey Protein 58 Servings, 4 Lbs (1.81Kg)",
                discountPercentage: 35,
                rating: "star4.9",
                oldPrice: 6399,
                newPrice: 4145,
                image: bestSellerImg1
            },
            {
                title: "MuscleTech NitroTech Performance Series Whey Protein - 4 Lbs (1.81Kg)",
                discountPercentage: 35,
                rating: "star4.8",
                oldPrice: 7799,
                newPrice: 5095,
                image: bestSellerImg2
            },
            {
                title: "Ultimate Nutrition Prostar 100% Whey Protein 5.28 Lbs",
                discountPercentage: 39,
                rating: "star4.8",
                oldPrice: 8999,
                newPrice: 5495,
                image: bestSellerImg3
            },
            {
                title: "Dymatize Elite 100% Whey Protein 5 Lbs",
                discountPercentage: 45,
                rating: "star4.8",
                oldPrice: 12999,
                newPrice: 7095,
                image: bestSellerImg4
            },
            {
                title: "BSN Syntha-6 Protein Powder 5 Lbs",
                discountPercentage: 14,
                rating: "star4.8",
                oldPrice: 7999,
                newPrice: 6095,
                image: bestSellerImg5
            },
            {
                title: "Xtend Original BCAAs Powder - 30 Servings ( Imported )",
                discountPercentage: 50,
                rating: "star4.9",
                oldPrice: 7099,
                newPrice: 6095,
                image: bestSellerImg6
            },
            {
                title: "MuscleBlaze Whey Gold 100% Whey Isolate 2 Kg",
                discountPercentage: 33,
                rating: "star4.9",
                oldPrice: 3999,
                newPrice: 1995,
                image: bestSellerImg7
            },
            {
                title: "Labrada Muscle Mass Gainer - 6.6 Lbs",
                discountPercentage: 24,
                rating: "star4.8",
                oldPrice: 8669,
                newPrice: 5795,
                image: bestSellerImg8
            },
        ]
    },
    {
        _id: 1113,
        heading: "pocket friendly",
        data: [
            {
                title: "Nutristar Ultra Premium Whey Protein 58 Servings, 4 Lbs (1.81Kg)",
                discountPercentage: 39,
                rating: null,
                oldPrice: 6399,
                newPrice: 4145,
                image: ""
            },
            {
                title: "MuscleTech NitroTech Performance Series Whey Protein - 4 Lbs (1.81Kg)",
                discountPercentage: 35,
                rating: 4.8,
                oldPrice: 7799,
                newPrice: 5095,
                image: ""
            },
            {
                title: "Ultimate Nutrition Prostar 100% Whey Protein 5.28 Lbs",
                discountPercentage: 37,
                rating: 4.8,
                oldPrice: 8999,
                newPrice: 5495,
                image: ""
            },
            {
                title: "Dymatize Elite 100% Whey Protein 5 Lbs",
                discountPercentage: 32,
                rating: 4.8,
                oldPrice: 12999,
                newPrice: 7095,
                image: ""
            },
            {
                title: "BSN Syntha-6 Protein Powder 5 Lbs",
                discountPercentage: 29,
                rating: 4.8,
                oldPrice: 7999,
                newPrice: 6095,
                image: ""
            },
            {
                title: "Xtend Original BCAAs Powder - 30 Servings ( Imported )",
                discountPercentage: 36,
                rating: 4.9,
                oldPrice: 7099,
                newPrice: 6095,
                image: ""
            },
            {
                title: "MuscleBlaze Whey Gold 100% Whey Isolate 2 Kg",
                discountPercentage: 18,
                rating: 4.9,
                oldPrice: 3999,
                newPrice: 1995,
                image: ""
            },
            {
                title: "Labrada Muscle Mass Gainer - 6.6 Lbs",
                discountPercentage: 38,
                rating: 4.8,
                oldPrice: 8669,
                newPrice: 5795,
                image: ""
            },
        ]
    },
    {
        _id: 1114,
        heading: "super saver pack",
        data: [
            {
                title: "MuscleTech Nitrotech 100% Whey Gold - 8.8 Lbs (4 Kg)",
                discountPercentage: 29,
                rating: "star5",
                oldPrice: 15999,
                newPrice: 11295,
                image: ""
            },
            {
                title: "MuscleBlaze Whey Protein - 8.8 Lbs",
                discountPercentage: 36,
                rating: "star4.7",
                oldPrice: 12549,
                newPrice: 8075,
                image: ""
            },
            {
                title: "Optimum Nutrition (ON) Gold Standard 100% Whey - 8.8 Lbs",
                discountPercentage: 14,
                oldPrice: 13299,
                newPrice: 11495,
                image: ""
            },
            {
                title: "MuscleTech NitroTech Performance Series Whey Protein - 4 Lbs (1.81Kg) (Pack of 2)",
                discountPercentage: 39,
                rating: "star5",
                oldPrice: 15598,
                newPrice: 9495,
                image: ""
            },
            {
                title: "MuscleBlaze Weight Gainer with Added Digezyme - 5kg",
                discountPercentage: 35,
                rating: "star4.9",
                oldPrice: 5349,
                newPrice: 3475,
                image: ""
            },
            {
                title: "Mutant Mass Gainer - 15 Lbs",
                discountPercentage: 39,
                rating: "star5",
                oldPrice: 11999,
                newPrice: 7295,
                image: ""
            },
            {
                title: "MuscleBlaze Whey Gold 100% Whey Isolate - 4 kg",
                discountPercentage: 37,
                rating: "star5",
                oldPrice: 15699,
                newPrice: 9875,
                image: ""
            },
            {
                title: "MuscleBlaze Whey Performance (70%) Protein - 8.8 Lbs",
                discountPercentage: 35,
                rating: "star5",
                oldPrice: 11099,
                newPrice: 7175,
                image: ""
            }
        ]
    },
    {
        _id: 1115,
        heading: "Clearance Sale",
        data: [
            {
                title: "Evogen Nutrition AminoJect BCAA - 30 Servings",
                discountPercentage: 72,
                rating: null,
                oldPrice: 4999,
                newPrice: 1395,
                image: ""
            },
            {
                title: "ProSupps Hydro BCAA - 30 Servings",
                discountPercentage: 63,
                rating: null,
                oldPrice: 3499,
                newPrice: 1295,
                image: ""
            },
            {
                title: "Evlution Nutrition (EVL) CLA 1000mg - 270 Softgels",
                discountPercentage: 71,
                rating: null,
                oldPrice: 3449,
                newPrice: 999,
                image: ""
            },
            {
                title: "ProSupps L-Arginine Nitrix Oxide - 120 Tablets",
                discountPercentage: 48,
                rating: null,
                oldPrice: 2899,
                newPrice: 1495,
                image: ""
            },
            {
                title: "Evlution Nutrition (EVL) Z-Matrix (ZMA)- 120 Capsules ( ***Near Expiry*** )",
                discountPercentage: 81,
                rating: null,
                oldPrice: 1999,
                newPrice: 375,
                image: ""
            },
            {
                title: "Insane Labz INSANE Whey Protein - 5 Lbs ( ***Near Expiry*** )",
                discountPercentage: 55,
                rating: "star5",
                oldPrice: 8799,
                newPrice: 3995,
                image: ""
            },
            {
                title: "MusclePharm Essentials CLA 1000mg , 90 Softgels ( ***Near Expiry*** )",
                discountPercentage: 59,
                rating: null,
                oldPrice: 2199,
                newPrice: 895,
                image: ""
            },
            {
                title: "Cultsport Liquid L-Carnitine 1500 mg - 30 Servings (Expiry - April 2024)",
                discountPercentage: 61,
                rating: null,
                oldPrice: 0,
                newPrice: 0,
                image: ""
            }
        ]
    },
]

export default productsData;

