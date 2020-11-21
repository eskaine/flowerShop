require("dotenv").config();
require("../config/mongo.config");
const Product = require("../models/product.models");


Product.insertMany(
    [
        {
            productName: "Rustic Hand Bouquet",
            price: 29,
            img_url: "https://media.karousell.com/media/photos/products/2020/11/9/rustic_hand_bouquet_1604907155_06fb0b33_progressive.jpg",
            desc: "For those who love the rustic look - a bouquet in autumn colours, of poms, eustomas, wheat stalks , caspia and eucalyptus.",
            customisation: {
                ribbon: ["black", "white"],
                wrap: ["brown", "black", "pink"],
                }
        },
        {
            productName: "NOVEMBER SPECIAL : Sunflower Bouquet",
            price: 25,
            img_url: "https://media.karousell.com/media/photos/products/2020/11/4/november_special__sunflower_bo_1604461867_d732817e_progressive.jpg",
            desc: "Unbelievable value at just $25 in November! (UP $32). Note: Bouquets will have the main flowers shown, but colours of main blooms and fillers may vary slightly. Overall colour scheme will be similar to what is shown in the listing.",
            customisation: {
                ribbon: ["black", "white"],
                wrap: ["brown", "black", "pink"],
                }
        },
        {
            productName: "NOVEMBER SPECIALS : Freestyle Hand Bouquet, Fresh Flowers",
            price: 35,
            img_url: "https://media.karousell.com/media/photos/products/2020/10/25/november_speciala_freestyle_ha_1603607049_dd5e3900_progressive.jpg",
            desc: "Grab these good value freestyle bouquets at just $35 (UP $40) and $45 (UP$50) respectively. Offer is valid throughout November only.",
            customisation: {
                ribbon: ["black", "white"],
                wrap: ["brown", "black", "pink"],
                }
        },
        {
            productName: "NOVEMBER SPECIALS: Freestyle Hand Bouquet, Fresh Flowers.",
            price: 25,
            img_url: "https://media.karousell.com/media/photos/products/2020/11/9/november_specials_freestyle_ha_1604938385_2d73638c_progressive.jpg",
            desc: "Grab these good value freestyle bouquets at just $25 in November! (UP $30). Note: Bouquets will have the main flowers shown, but colours of main blooms and fillers may vary slightly. Overall colour scheme will be similar.",
            customisation: {
                ribbon: ["black", "white"],
                wrap: ["brown", "black", "pink"],
                }
        },
        {
            productName: "Wedding Flowers : Artificial and Dried Flower Boutonnieres and Corsages",
            price: 6,
            img_url: "https://media.karousell.com/media/photos/products/2020/10/12/wedding_flowers__artificial_an_1602489917_36a097b5_progressive.jpg",
            desc: "Boutonnieres that will last long after the wedding is over. Can be repurposed as bag or hat pins.",
            customisation: {
                ribbon: ["black", "white"],
                wrap: ["brown", "black", "pink"],
                }
        },
        {
            productName: "Fresh Flowers, Sunflower Hand Bouquet.",
            price: 20,
            img_url: "https://media.karousell.com/media/photos/products/2020/9/10/september_sunflower_specials_1599745646_84bf0e61_progressive.jpg",
            desc: "(Teddy not included)",
            customisation: {
                ribbon: ["black", "white"],
                wrap: ["brown", "black", "pink"],
                }
        },
        {
            productName: "Fresh and dried flower boutonnieres.",
            price: 5,
            img_url: "https://media.karousell.com/media/photos/products/2020/10/13/fresh_and_dried_flower_boutonn_1602549083_b00259a7_progressive.jpg",
            desc: "Self collection OR delivery available (rates depend on location)",
            customisation: {
                ribbon: ["black", "white"],
                wrap: ["brown", "black", "pink"],
                }
        },
        {
            productName: "Bridal Bouquet.",
            price: 54,
            img_url: "https://media.karousell.com/media/photos/products/2020/9/3/bridal_bouquet_1599103387_96562939_progressive.jpg",
            desc: "12 rose bridal bouquets @ $54.  Every bouquet comes with a complimentary groom's boutonniere worth $6.50",
            customisation: {
                ribbon: ["black", "white"],
                wrap: ["brown", "black", "pink"],
                }
        },
        {
            productName: "Wedding : Bridal Bouquet.",
            price: 150,
            img_url: "https://media.karousell.com/media/photos/products/2020/8/8/wedding__bridal_bouquet_1596903722_c8966e78_progressive.jpg",
            desc: "This bouquet consists of a mix of fresh and dried flowers, including a variety of pampas grasses and dried lavender, fresh roses, baby' breath and eucalyptus greens. Perfect for the bride who likes all things rustic. Groom's boutonniere is complimentary with this bouquet.",
            customisation: {
                ribbon: ["black", "white"],
                wrap: ["brown", "black", "pink"],
                }
        },
        {
            productName: "Wedding Fresh Flowers,Hand Bouquet.",
            price: 80,
            img_url: "https://media.karousell.com/media/photos/products/2020/7/25/wedding_fresh_flowershand_bouq_1595676904_3e1e54d4_progressive.jpg",
            desc: "An elegant bouquet for an elegant bride.  Comes with a complimentary groom's boutonniere.",
            customisation: {
                ribbon: ["black", "white"],
                wrap: ["brown", "black", "pink"],
                }
        },
        {
            productName: "Fresh Flowers - Rose Bouquet.",
            price: 38,
            img_url: "https://media.karousell.com/media/photos/products/2020/7/4/july_special__fresh_flowers__r_1593833401_04ed321f_progressive.jpg",
            desc: "Available in all red , coral or all pink only.",
            customisation: {
                ribbon: ["black", "white"],
                wrap: ["brown", "black", "pink"],
                }
        },
        {
            productName: "Fresh Flowers - Rose Bouquet.",
            price: 38,
            img_url: "https://media.karousell.com/media/photos/products/2020/7/1/july_special__fresh_flowers__r_1593594473_d04d0365_progressive.jpg",
            customisation: {
                desc: "Available in all red , coral or all pink only.",
                ribbon: ["black", "white"],
                wrap: ["brown", "black", "pink"],
                }
        },
        {
            productName: "Wedding Flowers (Artificial), Boutonnieres and Corsages.",
            price: 6,
            img_url: "https://media.karousell.com/media/photos/products/2020/4/23/wedding_flowers_artificial_bou_1587621137_2b230b16_progressive.jpg",
            desc: "Boutonnieres that will last, long after your wedding is over.  Can be repurposed as hat or bag pins. These are NOT factory produced, but carefully designed and individually crafted.",
            customisation: {
                ribbon: ["black", "white"],
                wrap: ["brown", "black", "pink"],
                }
        },
        {
            productName: "Bridal Bouquet (Artificial Flowers).",
            price: 60,
            img_url: "https://media.karousell.com/media/photos/products/2020/01/01/bridal_bouquet_artificial_flowers_1577869806_17c24fcc_progressive.jpg",
            desc: "Bridal bouquet made of high quality artificial flowers. This is not a factory assembled bouquet, but customised and pieced together by hand. Bouquet measures approximately 25cm in diameter and comes with a complimentary groom's boutonniere",
            customisation: {
                ribbon: ["black", "white"],
                wrap: ["brown", "black", "pink"],
                }
        },
        {
            productName: "Wedding: Bridesmaids' Bouquets (Artificial flowers).",
            price: 20,
            img_url: "https://media.karousell.com/media/photos/products/2020/01/01/wedding_bridesmaids_bouquets_artificial_flowers_1577869583_e29ed926_progressive.jpg",
            desc: "Bridesmaids' bouquets made of high quality artificial flowers. These are  not  factory assembled bouquets, but customised and pieced together by hand. Priced at $20-$25 per piece depending on design and flower types used. Diameter is approximately 17-18cm. ",
            customisation: {
                ribbon: ["black", "white"],
                wrap: ["brown", "black", "pink"],
                }
        },
        {
            productName: "Wedding Flowers, Bridal Bouquet.",
            price: 95,
            img_url: "https://media.karousell.com/media/photos/products/2019/11/17/wedding_flowers_bridal_bouquet_1573998395_7395ed87_progressive.jpg",
            desc: "An elegant, rustic bouquet comprising mixed roses, eucalyptus leaves, dusty miller and dried grasses. Comes with a complimentary groom's ",
            customisation: {
                ribbon: ["black", "white"],
                wrap: ["brown", "black", "pink"],
                }
        },
        {
            productName: "Wedding Flowers, Calla Lily and Rose Bouquet.",
            price: 145,
            img_url: "https://media.karousell.com/media/photos/products/2019/03/29/wedding_flowers_calla_lily_and_rose_bouquet_1553861072_e1397ce3_progressive.jpg",
            desc: "Make a grand entrance with this elegant bouquet of calla lilies and roses, with dusty miller and eucalyptus greens and leucadendrons (fillers and greens may vary slightly depending on seasonal availablity). Comes with a complimentary groom's boutonniere worth $10.",
            customisation: {
                ribbon: ["black", "white"],
                wrap: ["brown", "black", "pink"],
                }
        },
        {
            productName: "NOVEMBER SPECIALS: Sunflower Bouquet.",
            price: 40,
            img_url: "https://media.karousell.com/media/photos/products/2018/12/28/fresh_flower_bouquet__sunflowers_1545972750_3e367674.jpg",
            desc: "This bouquet of 5 sunflowers will surely bring a smile to any receiver! A good value deal @ just $40 throughout the month of November.",
            customisation: {
                ribbon: ["black", "white"],
                wrap: ["brown", "black", "pink"],
                }
        },
        {
            productName: "Wedding Flowers, Hand Bouquet.",
            price: 54,
            img_url: "https://media.karousell.com/media/photos/products/2018/10/19/wedding_flowers_hand_bouquet_1539897515_05c94905_progressive.jpg",
            desc: "This is a gorgeous, modest sized rustic bouquet of 9 roses, with baby's breath, dusty miller and eucalyptus leaves. Ribbon or twine tied. Comes with a complimentary groom's boutonniere worth $6.50. Bouquet may be upsized to 12 or 15 roses @ $60 and $66 respectively.",
            customisation: {
                ribbon: ["black", "white"],
                wrap: ["brown", "black", "pink"],
                }
        },
        {
            productName: "Wedding Flowers, Bridal Hand Bouquet.",
            price: 48,
            img_url: "https://media.karousell.com/media/photos/products/2018/10/12/wedding_flowers_bridal_hand_bouquet_1539306098_9e49d5a2_progressive.jpg",
            desc: "A simple and elegant bouquet of 9 roses, baby's breath and ruscus/eucalyptus leaves. Ribbon or twine tied. Comes with a complimentary groom's boutonniere. Bouquet may be upsized to 12 or 15 roses @ $52 and $56 respectively.",
            customisation: {
                ribbon: ["black", "white"],
                wrap: ["brown", "black", "pink"],
                }
        },
        {
            productName: "Wedding Flowers.",
            price: 45,
            img_url: "https://media.karousell.com/media/photos/products/2018/09/09/wedding_flowers_1536476620_8a621b88_progressive.jpg",
            desc: "This long table arrangement of mixed roses  with  baby's breath and caspia  makes an elegant centrepiece for your ROM table or for a long dining table or sideboard.  Dimensions are approximately 55 cm x 18cm",
            customisation: {
                ribbon: ["black", "white"],
                wrap: ["brown", "black", "pink"],
                }
        },
        {
            productName: "Wedding Bouquet : Fresh and Dried Flowers.",
            price: 90,
            img_url: "https://media.karousell.com/media/photos/products/2018/08/11/wedding_bouquet__fresh_and_dried_flowers_1533925063_d3ac757c_progressive.jpg",
            desc: "For those who like the rustic look, this unusual bouquet consists of a mix of fresh roses, caspia and baby's breath, with wheat stalks, cotton flowers and dried lavender.  Bouquet comes with a complimentary matching boutonniere for the groom.",
            customisation: {
                ribbon: ["black", "white"],
                wrap: ["brown", "black", "pink"],
                }
        },
        {
            productName: "Bridal Bouquet.",
            price: 110,
            img_url: "https://media.karousell.com/media/photos/products/2018/06/13/bridal_bouquet_1528825508_2f0c0a9a_progressive.jpg",
            desc: "An elegant, rustic bouquet of white roses, astible, hunter mix and an assortment of greens for those who fancy a white wedding. Comes with a complimentary matching groom's boutonniere.",
            customisation: {
                ribbon: ["black", "white"],
                wrap: ["brown", "black", "pink"],
                }
        },
        {
            productName: "Wedding flowers.",
            price: 100,
            img_url: "https://media.karousell.com/media/photos/products/2018/05/24/wedding_flowers_1527137434_e40f1033.jpg",
            desc: "This package consists of a bridal bouquet (1 dozen roses), groom's boutonniere and table flowers (approx 55cm length). Additional boutonnieres are chargeable at $5 per piece.",
            customisation: {
                ribbon: ["black", "white"],
                wrap: ["brown", "black", "pink"],
                }
        },
        {
            productName: "Wedding Flowers, Bridal Bouquet.",
            price: 95,
            img_url: "https://media.karousell.com/media/photos/products/2017/10/26/wedding_flowers_bridal_bouquet_1508975247_e7f51920.jpg",
            desc: "A gorgeous, romantic bouquet of burgundy and baby pink roses, freesias, dusty miller and eucalyptus and ruscus greens. Approxomately 23cm diameter. Bouquet comes with a complimentary matching boutonniere for the groom.",
            customisation: {
                ribbon: ["black", "white"],
                wrap: ["brown", "black", "pink"],
                }
        },
        {
            productName: "Table Arrangement /Hydrangeas And Baby's Breath / Fresh Flowers.",
            price: 26,
            img_url: "https://media.karousell.com/media/photos/products/2016/11/30/table_arrangement_hydrangeas_and_babys_breath__fresh_flowers_1480447328_e660bfe5.jpg",
            desc: "For lovers of all things blue - this beautiful arrangement of blue hydrangeas and baby's breath, with sprigs of caspia, will simply captivate you. Measuring approximately 18cm in diameter, it is the perfect conversation piece for a coffee table",
            customisation: {
                ribbon: ["black", "white"],
                wrap: ["brown", "black", "pink"],
                }
        },
        {
            productName: "Hydrangea Hand Bouquet/ Fresh Flowers.",
            price: 16,
            img_url: "https://media.karousell.com/media/photos/products/2016/10/17/hydrangea_hand_bouquet_fresh_flowers_1476690710_2e3ec43e.jpg",
            desc: "This is a small posy consisting of tiny- petalled blue Malaysian hydrangea with an assortment of fillers(no choosing, but rest assured that the fillers will compliment the hydrangea). Bouquet measures 16/17cm across x 28cm height. Available only in blue.",
            customisation: {
                ribbon: ["black", "white"],
                wrap: ["brown", "black", "pink"],
                }
        },
        {
            productName: "Wedding, Bridal Bouquet Roses And Baby's Breath /Fresh Flowers.",
            price: 55,
            img_url: "https://media.karousell.com/media/photos/products/2016/09/14/bridal_bouquet__roses_and_babys_breath_fresh_flowers_1473841363_af2de0ff.jpg",
            desc: "A large bouquet of cream roses surrounded by baby's breath - simple, but elegant. Hand bouquet is tied with a cream organza or satin ribbon and has bare stem ends ( measures approximately 22-23cm in diameter). Comes with a complimentary matching butonniere for the groom",
            customisation: {
                ribbon: ["black", "white"],
                wrap: ["brown", "black", "pink"],
                }
        },
        {
            productName: "Wedding, Bridal Bouquet Roses And Baby's Breath / Fresh Flowers.",
            price: 45,
            img_url: "https://media.karousell.com/media/photos/products/2020/11/9/november_specials_freestyle_ha_1604938385_2d73638c_progressive.jpg",
            desc: "A modest bouquet of 12 hot pink roses with sprigs of baby's breath and tied  with a cream or pink satin ribbon (bare stem ends) This bouquet measures approximately 20cm in diameter and comes with a complimentary butonniere for the groom.",
            customisation: {
                ribbon: ["black", "white"],
                wrap: ["brown", "black", "pink"],
                }
        },
        {
            productName: "Wedding, Roses And Carnations Bridal Hand Bouquet With Matching Butonniere For The Groom.",
            price: 50,
            img_url: "https://media.karousell.com/media/photos/products/2016/03/01/flowers__bridal_hand_bouquet_1456807755_95bda850.jpg",
            desc: "A pretty posy for a blushing bride! Hand bouquet is tied with a pink satin ribbon and consists of carnations, roses and sprigs of baby's breath and measures approximately 16- 17cm in diameter. All this, plus a matching butonniere for the groom.",
            customisation: {
                ribbon: ["black", "white"],
                wrap: ["brown", "black", "pink"],
                }
        },
        {
            productName: "Wedding Car Flowers (Artificial).",
            price: 50,
            img_url: "https://media.karousell.com/media/photos/products/2020/01/01/wedding_car_flowers_artificial_1577867990_c02c5f7b_progressive.jpg",
            desc: "This weather resistant car decoration has been used just once. Decorations are for front bonnet and 4 doors only. Price does not include installation (+$25 for installation), but instructions will be provided for.",
            customisation: {
                ribbon: ["black", "white"],
                wrap: ["brown", "black", "pink"],
                }
        },
    ]
)
.then((suc) => {
    console.log("successfully added!");
})
.catch((e) => {
    console.log(e);
});