'use strict';

const HttpClient = require('node-rest-client').Client;

// This should point to some commerce backend URL to GET products
const url = 'http://isns-dps.com:1512/rest/V1.0/list/StructureGroup/byStructure?pageSize=-1&structure=Sample%20Data%20Home%20Improvement&fields=StructureGroup.Identifier,StructureGroupLang.Name(EN),StructureGroupLang.Description(EN),StructureGroup.ParentIdentifier';

let products = {
  "offset": 0,
  "count": 1,
  "total": 1,
  "results": [
    {
    "id": "product-1",
    "name": {
        "de": "A localized DE name",
        "en": "A localized EN name"
    },
    "description": {
        "de": "A localized DE description",
        "en": "A localized EN description"
    },
    "categories": [
        {
            "id": "category-1"
        },
        {
            "id": "category-2"
        }
    ],
    "prices": [
        {
            "country": "US",
            "currency": "USD",
            "centAmount": 50000
        }
    ],
    "assets": [
        {
            "id": "img-1.jpg",
            "url": "https://example.com/img-1.jpg"
        }
    ],
    "attributes": [
        {
            "id": "longDescription",
            "name": {
                "en": "An example LocalizedString attribute"
            },
            "value": {
                "de": "A localized DE example value for product 1",
                "en": "A localized EN example value for product 1"
            }
        }
    ],
    "createdDate": "2017-01-11T14:58:29.432Z",
    "lastModifiedDate": "2017-07-06T18:09:42.687Z",
    "masterVariantId": "product-1-1",
    "variants": [
        {
            "id": "product-1-1",
            "sku": "sku-1-1",
            "name": {
                "de": "A localized DE name",
                "en": "A localized EN name"
            },
            "description": {
                "de": "A localized DE description",
                "en": "A localized EN description"
            },
            "createdDate": "2017-01-11T14:58:29.432Z",
            "lastModifiedDate": "2017-07-06T18:09:42.687Z",
            "categories": [
                {
                    "id": "category-1"
                }
            ],
            "prices": [
                {
                    "country": "US",
                    "currency": "USD",
                    "centAmount": 10000
                }
            ],
            "assets": [
                {
                    "id": "img-1-1.jpg",
                    "url": "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                }
            ],
            "attributes": [
                {
                    "id": "summary",
                    "name": {
                        "en": "An example LocalizedString attribute"
                    },
                    "value": {
                        "de": "A localized DE example value for variant 1",
                        "en": "A localized EN example value for variant 1"
                    },
                    "variantAttribute": false
                },
                {
                    "id": "power",
                    "name": {
                        "en": "An example Integer attribute"
                    },
                    "value": 1,
                    "variantAttribute": true
                },
                {
                    "id": "brand",
                    "name": {
                        "en": "An example String attribute"
                    },
                    "value": "Adobe",
                    "variantAttribute": true
                },
                {
                    "id": "publishedDate",
                    "name": {
                        "en": "An example Date attribute"
                    },
                    "value": "2018-04-17T17:26:29.432Z",
                    "variantAttribute": false
                }
            ]
        },
        {
            "id": "product-1-2",
            "sku": "sku-1-2",
            "name": {
                "de": "A localized DE name",
                "en": "A localized EN name"
            },
            "description": {
                "de": "A localized DE description",
                "en": "A localized EN description"
            },
            "createdDate": "2017-01-11T14:58:29.432Z",
            "lastModifiedDate": "2017-07-06T18:09:42.687Z",
            "categories": [
                {
                    "id": "category-2"
                }
            ],
            "prices": [
                {
                    "country": "US",
                    "currency": "USD",
                    "centAmount": 20000
                }
            ],
            "assets": [
                {
                    "id": "img-1-2.jpg",
                    "url": "https://example.com/img-1-2.jpg"
                }
            ],
            "attributes": [
                {
                    "id": "summary",
                    "name": {
                        "en": "An example LocalizedString attribute"
                    },
                    "value": {
                        "de": "A localized DE example value for variant 2",
                        "en": "A localized EN example value for variant 2"
                    },
                    "variantAttribute": false
                },
                {
                    "id": "power",
                    "name": {
                        "en": "An example Integer attribute"
                    },
                    "value": 2,
                    "variantAttribute": true
                },
                {
                    "id": "brand",
                    "name": {
                        "en": "An example String attribute"
                    },
                    "value": "Adobe Systems",
                    "variantAttribute": true
                },
                {
                    "id": "publishedDate",
                    "name": {
                        "en": "An example Date attribute"
                    },
                    "value": "2018-04-17T17:26:29.432Z",
                    "variantAttribute": false
                }
            ]
        }
    ]
}
  ],
}


function main(args) {
    
    //console.log('My searchProducts Arguments:' + JSON.stringify(args, null, 2));
    var options_auth = { user: "rest", password: "Heiler33!" };

    let httpClient = new HttpClient( options_auth);
    let filter = null;
    let categoryId = null;
    console.log(args);

    if( args) {
        filter = args["filter"];
        //console.log('My filter:' + JSON.stringify( filter, null, 2));
        categoryId = (filter) ? filter.match(/[\d]+/)[0] : '';
        //console.log('categoryId:' + categoryId);
    }
    
        
        return new Promise((resolve, reject) => {
            
            var options_auth = { user: "rest", password: "Heiler33!" };
            let httpClient = new HttpClient( options_auth);
            let url = 'http://isns-dps.com:1512/rest/V1.0/list/StructureGroup/bySearch/?query=StructureGroup.Identifier%20in%20("' 
                    + categoryId + '")&structure=Sample%20Data%20Home%20Improvement&fields=StructureGroup.Identifier';
            
                
            httpClient.get(url, function(data, response) {
                    //data.rows.forEach(r => {console.log(r)});
                    // get the internal Id 
                        
                    //console.log(url);
                    url = 'http://isns-dps.com:1512/rest/V1.0/list/Product2G/byStructureGroupDeep/?structureGroup=799@10005&fields=Product2G.ProductNo,Product2GLang.DescriptionShort(EN, 1)'
                    //console.log('url: ' + url);

                    httpClient.get(url, function(data, response) {
                        //console.log('DATA' + JSON.stringify(data, null, 2));
                         resolve({
                            statusCode: 200,
                            headers: { 'Content-Type': 'application/json' },
                            body: mapProducts(data)
                        });

                    }).on('error', function (err) {
                        // To have this example working even without a valid URL, we simulate some "response" here
                        //console.log(err)    
                         resolve(buildResponse(sampleProductData));
                    });
                }).on('error', function (err) {
                    resolve(err);
                });
       
               });
          
        

    
}

 
const args = {
filter: 'categories.id:subtree("1332338658597")'
}
main(args).then(res => {
console.log('res:' + JSON.stringify(res, null, 2));
        }).catch(err => {
console.log('err:' + err);
        });


function buildResponse(backendProduct) {
    return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: mapProduct(backendProduct)
    };
}

/**
 * Example conversion of a commerce backend product into a CIF product
 * 
 * @param backendProduct The JSON product data coming from the commerce system backend.
 * @returns a CIF product.
 */
function mapProducts(data) {
    let response = {
        offset: 0,
        count: data.rowCount,
        total: data.totalSize
    };
    let results = []; 
    let variants = [];
    let variant = {
        id: '1234',
        sku: 'sku',
        name: {
                en: 'A localized EN name'
        }
    }
    variants.push(variant);
    data.rows.forEach(row => {
        let result = {
            name: {},
            categories: [{id: 'category-id'}]
        };
        result.id = row.values[0];
        result.name.en = row.values[1];
        result.variants = variants;
        result.masterVariantId = variant.id;
        results.push(result);
    });
    
    response.results = results;
    return response;
}

module.exports.main = main;

// uncomment out the following line to run this locally using "node getCategories.js

// main().then(res => console.log(JSON.stringify(res, null, 2))).catch(err => console.log(err));