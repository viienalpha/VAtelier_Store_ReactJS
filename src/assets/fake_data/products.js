const product_01_image_01 = require('../images/products/menproduct (1).jpg')
const product_01_image_02 = require('../images/products/menproduct (13).jpg')
// const product_01_image_03 = require('../images/products/product-01 (3).jpg').default

const product_02_image_01 = require('../images/products/menproduct (10).jpg')
const product_02_image_02 = require('../images/products/menproduct (14).jpg')

const product_03_image_01 = require('../images/products/menproduct (11).jpg')
const product_03_image_02 = require('../images/products/sam-burriss-eB0Emi-vJRk-unsplash.jpg')

const product_04_image_01 = require('../images/products/menproduct (8).jpg')
const product_04_image_02 = require('../images/products/tyler-nix-6UEyVsw_1lU-unsplash.jpg')

const product_05_image_01 = require('../images/products/menproduct (7).jpg')
const product_05_image_02 = require('../images/products/rayul-_M6gy9oHgII-unsplash.jpg')

const product_06_image_01 = require('../images/products/menproduct (6).jpg')
const product_06_image_02 = require('../images/products/tyler-nix-BQrxXytYaHI-unsplash.jpg')

const product_07_image_01 = require('../images/products/menproduct (5).jpg')
const product_07_image_02 = require('../images/products/menproduct (12).jpg')

const product_08_image_01 = require('../images/products/menproduct (4).jpg')
const product_08_image_02 = require('../images/products/menproduct (4).jpg')

const product_09_image_01 = require('../images/products/menproduct (3).jpg')
const product_09_image_02 = require('../images/products/menproduct (4).jpg')

const product_10_image_01 = require('../images/products/menproduct (2).jpg')
const product_10_image_02 = require('../images/products/menproduct (4).jpg')

const product_11_image_01 = require('../images/products/menproduct (9).jpg')
const product_11_image_02 = require('../images/products/menproduct (4).jpg')

const product_12_image_01 = require('../images/products/menproduct (12).jpg')
const product_12_image_02 = require('../images/products/menproduct (4).jpg')

const products = [
    {
        title: "Áo thun Dinosaur 01",
        price: '189000',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "red", "orange"],
        slug: "ao-thun-dinosaur-01",
        size: ["s", "m", "l", "xl"]
    },
    {
        title: "Áo thun Dinosaur 02",
        price: '159000',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "red", "blue"],
        slug: "ao-thun-dinosaur-02",
        size: ["s", "m"]
    },
    {
        title: "Áo thun Dinosaur 03",
        price: '190000',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "red", "orange", "yellow"],
        slug: "ao-thun-dinosaur-03",
        size: ["m"]
    },
    {
        title: "Áo thun Polo 04",
        price: '194000',
        image01: product_04_image_01,
        image02: product_04_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "orange", "blue"],
        slug: "ao-thun-polo-04",
        size: ["xl"]
    },
    {
        title: "Áo thun Polo 05",
        price: '194000',
        image01: product_05_image_01,
        image02: product_05_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "pink"],
        slug: "ao-thun-polo-05",
        size: ["xxl"]
    },
    {
        title: "Áo thun Polo 06",
        price: '194000',
        image01: product_06_image_01,
        image02: product_06_image_02,
        categorySlug: "ao-thun",
        colors: ["black"],
        slug: "ao-thun-polo-06",
        size: ["s", "m", "xl"]
    },
    {
        title: "Áo somi caro 07",
        price: '194000',
        image01: product_07_image_01,
        image02: product_07_image_02,
        categorySlug: "ao-somi",
        colors: ["white", "red", "orange", "blue"],
        slug: "ao-somi-caro-07",
        size: ["l", "xl"]
    },
    {
        title: "Áo somi dài tay 08",
        price: '194000',
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: "ao-somi",
        colors: ["white", "red", "black"],
        slug: "ao-somi-dai-tay-08",
        size: ["s", "m", "xl"]
    },
    {
        title: "Áo somi tay dài 09",
        price: '194000',
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: "ao-somi",
        colors: ["white", "blue"],
        slug: "ao-somi-tay-dai-09",
        size: ["m"]
    },
    {
        title: "Quần jean phong cách 10",
        price: '194000',
        image01: product_10_image_01,
        image02: product_10_image_02,
        categorySlug: "quan-jean",
        colors: ["blue", "black"],
        slug: "quan-jean-phong-cach-10",
        size: ["l"]
    },
    {
        title: "Quần jean 11",
        price: '194000',
        image01: product_11_image_01,
        image02: product_11_image_02,
        categorySlug: "quan-jean",
        colors: ["blue", "black"],
        slug: "quan-jean-11",
        size: ["s", "m", "xl"]
    },
    {
        title: "Quần jean 12",
        price: '194000',
        image01: product_12_image_01,
        image02: product_12_image_02,
        categorySlug: "quan-jean",
        colors: ["blue"],
        slug: "quan-jean-12",
        size: ["s", "m", "xl"]
    },
    {
        title: "Áo thun Dinosaur 13",
        price: '189000',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "red"],
        slug: "ao-thun-dinosaur-13",
        size: ["s", "m", "xl"]
    },
    {
        title: "Áo thun Dinosaur 14",
        price: '159000',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "blue"],
        slug: "ao-thun-dinosaur-14",
        size: ["s", "m"]
    },
    {
        title: "Áo thun Dinosaur 15",
        price: '190000',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "ao-thun",
        colors: ["red", "blue"],
        slug: "ao-thun-dinosaur-15",
        size: ["xl"]
    },
    {
        title: "Áo somi dài tay 16",
        price: '194000',
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: "ao-somi",
        colors: ["blue", "black"],
        slug: "ao-somi-dai-tay-16",
        size: ["m", "xl"]
    },
    {
        title: "Áo somi tay dài 17",
        price: '194000',
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: "ao-somi",
        colors: ["white", "blue"],
        slug: "ao-somi-tay-dai-17",
        size: ["s", "l", "xl"]
    },
    {
        title: "Quần jean phong cách 18",
        price: '194000',
        image01: product_10_image_01,
        image02: product_10_image_02,
        categorySlug: "quan-jean",
        colors: ["blue", "black"],
        slug: "quan-jean-phong-cach-18",
        size: ["s", "m", "l", "xl"]
    },
    // 18 products
]

const getAllProducts = () => products

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}

const productData = {
    getAllProducts,
    getProducts
}

export default productData