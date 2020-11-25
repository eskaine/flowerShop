require("dotenv").config();
require("../config/mongo.config");
const Product = require("../models/product.models");


Product.insertMany(
    [
        {
            productName: "Sunshine Mixed",
            price: 40,
            img_url: "https://res.cloudinary.com/dfqx6m8lw/image/upload/v1606286374/mumsworkshop/product-images/products/sunshine-mixed_ose7fg.jpg",
            desc: "For the free-spirited. Mix of wild and dried fillers with a sunflower accent.",
            customisation: {
                ribbon: ["Black", "White", "Pink", "Light Blue", "Dark Blue", "Gold", "Silver", "Rope"],
                wrap: ["None", "Black", "White", "Peach", "Light Blue", "Dark Blue"],
                }
        },
        {
            productName: "Rustic Bride",
            price: 128,
            img_url: "https://res.cloudinary.com/dfqx6m8lw/image/upload/v1606286373/mumsworkshop/product-images/products/rustic-bride_yx98el.jpg",
            desc: "Favourite bridal bouquet for brides who have outdoor themed weddings.",
            customisation: {
                ribbon: ["Black", "White", "Pink", "Light Blue", "Dark Blue", "Gold", "Silver", "Rope"],
                wrap: ["None", "Black", "White", "Peach", "Light Blue", "Dark Blue"],
                }
        },
        {
            productName: "Wild Mix",
            price: 50,
            img_url: "https://res.cloudinary.com/dfqx6m8lw/image/upload/v1606286373/mumsworkshop/product-images/products/wild-mix_ssxqyc.jpg",
            desc: "For those who love the rustic look - a bouquet in autumn colours, of poms, eustomas, wheat stalks , caspia and eucalyptus.",
            customisation: {
                ribbon: ["Black", "White", "Pink", "Light Blue", "Dark Blue", "Gold", "Silver", "Rope"],
                wrap: ["None", "Black", "White", "Peach", "Light Blue", "Dark Blue"],
                }
        },
        {
            productName: "Wild Sunshine",
            price: 78,
            img_url: "https://res.cloudinary.com/dfqx6m8lw/image/upload/v1606286372/mumsworkshop/product-images/products/wild-sunshine_pdx2tr.jpg",
            desc: "A sophisticated mix of roses and sunflowers that represent the wild yet refined.",
            customisation: {
                ribbon: ["Black", "White", "Pink", "Light Blue", "Dark Blue", "Gold", "Silver", "Rope"],
                wrap: ["None", "Black", "White", "Peach", "Light Blue", "Dark Blue"],
                }
        },
        {
            productName: "Sunshine Baby",
            price: 25,
            img_url: "https://res.cloudinary.com/dfqx6m8lw/image/upload/v1606286374/mumsworkshop/product-images/products/sunshine-baby_je0t1a.jpg",
            desc: "No frills - Single stalk sunflower with baby's breath with a rustic touch from dried wheat stalks.",
            customisation: {
                ribbon: ["Black", "White", "Pink", "Light Blue", "Dark Blue", "Gold", "Silver", "Rope"],
                wrap: ["None", "Black", "White", "Peach", "Light Blue", "Dark Blue"],
                }
        },
        {
            productName: "Sunshine Bear",
            price: 40,
            img_url: "https://res.cloudinary.com/dfqx6m8lw/image/upload/v1606286373/mumsworkshop/product-images/products/sunshine-bear_jucqmp.jpg",
            desc: "Classic single stalk sunflower with baby's breath accompanied by beary friendly friend.",
            customisation: {
                ribbon: ["Black", "White", "Pink", "Light Blue", "Dark Blue", "Gold", "Silver", "Rope"],
                wrap: ["None", "Black", "White", "Peach", "Light Blue", "Dark Blue"],
                }
        },
        {
            productName: "15 Red Roses",
            price: 120,
            img_url: "https://res.cloudinary.com/dfqx6m8lw/image/upload/v1606286374/mumsworkshop/product-images/products/no-frills_ghoxi9.jpg",
            desc: "For the romantics - a declaration of love. 15 red roses - no frills.",
            customisation: {
                ribbon: ["Black", "White", "Pink", "Light Blue", "Dark Blue", "Gold", "Silver", "Rope"],
                wrap: ["None", "Black", "White", "Peach", "Light Blue", "Dark Blue"],
                }
        },
        {
            productName: "9 Red Roses",
            price: 85,
            img_url: "https://res.cloudinary.com/dfqx6m8lw/image/upload/v1606286373/mumsworkshop/product-images/products/nine-red-roses_fgfijb.jpg",
            desc: "A classic combination of 9 red roses, baby's breath and eucalyptus.",
            customisation: {
                ribbon: ["Black", "White", "Pink", "Light Blue", "Dark Blue", "Gold", "Silver", "Rope"],
                wrap: ["None", "Black", "White", "Peach", "Light Blue", "Dark Blue"],
                }
        },
        {
            productName: "9 Pink Roses",
            price: 85,
            img_url: "https://res.cloudinary.com/dfqx6m8lw/image/upload/v1606286373/mumsworkshop/product-images/products/nine-red-roses_fgfijb.jpg",
            desc: "A classic combination of 9 pink roses and baby's breath.",
            customisation: {
                ribbon: ["Black", "White", "Pink", "Light Blue", "Dark Blue", "Gold", "Silver", "Rope"],
                wrap: ["None", "Black", "White", "Peach", "Light Blue", "Dark Blue"],
                }
        },
        {
            productName: "For Lily",
            price: 68,
            img_url: "https://res.cloudinary.com/dfqx6m8lw/image/upload/v1606286371/mumsworkshop/product-images/products/lily-field_xcfbr3.jpg",
            desc: "Lillies for Lily. What's more to say?",
            customisation: {
                ribbon: ["Black", "White", "Pink", "Light Blue", "Dark Blue", "Gold", "Silver", "Rope"],
                wrap: ["None", "Black", "White", "Peach", "Light Blue", "Dark Blue"],
                }
        },
        {
            productName: "For Lily White",
            price: 68,
            img_url: "https://res.cloudinary.com/dfqx6m8lw/image/upload/v1606287916/mumsworkshop/product-images/products/white-lilies_j8bln4.jpg",
            desc: "If Lily prefers white.",
            customisation: {
                ribbon: ["Black", "White", "Pink", "Light Blue", "Dark Blue", "Gold", "Silver", "Rope"],
                wrap: ["None", "Black", "White", "Peach", "Light Blue", "Dark Blue"],
                }
        },
        {
            productName: "Everlasting",
            price: 65,
            img_url: "https://res.cloudinary.com/dfqx6m8lw/image/upload/v1606287917/mumsworkshop/product-images/products/the-everlasting_psdqu3.jpg",
            desc: "The Everlasting bouquet, for those who like lasting beauty.",
            customisation: {
                ribbon: ["Black", "White", "Pink", "Light Blue", "Dark Blue", "Gold", "Silver", "Rope"],
                wrap: ["None", "Black", "White", "Peach", "Light Blue", "Dark Blue"],
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
        