const { objectToArrays, swapNameForID } = require("./utils.js");

describe("objectToArrays", () => {
  it("should return an empty array, if given an empty array", () => {
    // arrange
    // act
    const arr = objectToArrays([]);
    expect(arr).toEqual([]);
  });
  it("should change key value to array, when a single object is given", () => {
    // arrange
    const shopObj = [
      {
        shop_name: "Dibbert Inc",
      },
    ];
    const shop = [["Dibbert Inc"]];
    // act
    const arr1 = objectToArrays(shopObj);
    expect(arr1).toEqual(shop);
  });
    it("should change key value to array, when single objects are given", () => {
      // arrange
      const shopObj = [{
          shop_name: 'Dibbert Inc',
          owner: 'Aaliyah',
          slogan: 'Implemented motivating customer loyalty'
        }]
        const shop = [['Dibbert Inc', 'Aaliyah',
        'Implemented motivating customer loyalty']]
      // act
      const arr1 = objectToArrays(shopObj)
      expect(arr1).toEqual(shop);
    });
    it("should change key value to array, when multiple objects are given", () => {
        // arrange
        const shopObj = [{
            shop_name: 'Dibbert Inc',
            owner: 'Aaliyah',
            slogan: 'Implemented motivating customer loyalty'
          },
          {
            shop_name: 'Feeney Inc',
            owner: 'Elta',
            slogan: 'Function-based intermediate secured line'
          }]
          const shop = [['Dibbert Inc',
          'Aaliyah',
          'Implemented motivating customer loyalty'],
          [
           'Feeney Inc',
            'Elta',
            'Function-based intermediate secured line'
          ]]
        // act
        const arr1 = objectToArrays(shopObj)
        expect(arr1).toEqual(shop);
      });
      it("should check for mutations", () => {
        // arrange
        const shopObj = [{
            shop_name: 'Dibbert Inc',
            owner: 'Aaliyah',
            slogan: 'Implemented motivating customer loyalty'
          }]
        // act
        const arr1 = objectToArrays(shopObj)
        console.log(arr1)
        console.log(shopObj)
        expect(shopObj).toEqual([{
            shop_name: 'Dibbert Inc',
            owner: 'Aaliyah',
            slogan: 'Implemented motivating customer loyalty'
          }]);
      });
});

describe.only('swapNameForID', () => {
  it('returns empty array if empty array arguments given with', () => {
    // first test here
    const artistIdReference = {
      Grammatics: 9923,
      Doves: 324
    };
    const albums = swapNameForID([], (artist = artistIdReference));
    expect(albums).toEqual([]);
  });
  it('return the original array if no artists object is given', () => {
    //arr
    const albums = [
      { name: 'Grammatics', artist: 'Grammatics', releaseYear: 2009 },
      { name: 'Kingdom of Rust', artist: 'Doves', releaseYear: 2009 }
    ];
    //act
    const artistAlbums = swapNameForID(albums);
    //assert
    expect(artistAlbums).toEqual(albums);
  });

  it('replace the artist name by id when a single object it give with reference', () => {
    //arr
    const album = [
      { name: 'Grammatics', shop: 'Grammatics', releaseYear: 2009 }
    ];
    const artistReference = { Grammatics: 9923 };
    const aritstAlbumId = [
      { name: 'Grammatics', shop_id: 9923, releaseYear: 2009 }
    ];
    //act
    const artistAlbum = swapNameForID(album, artistReference);
    //assert
    expect(artistAlbum).toEqual(aritstAlbumId);
  });
  it('replace the artist name by id when a multiple objects are given with reference', () => {
    //arr
    const albums = [
      { name: 'Grammatics', shop: 'Grammatics', releaseYear: 2009 },
      { name: 'Kingdom of Rust', shop: 'Doves', releaseYear: 2009 }
    ];
    const artistIdReference = {
      Grammatics: 9923,
      Doves: 324
    };
    //act
    const artistAlbum = swapNameForID(albums, artistIdReference);
    console.log(artistAlbum);
    //assert
    expect(artistAlbum).toEqual([
      { name: 'Grammatics', shop_id: 9923, releaseYear: 2009 },
      { name: 'Kingdom of Rust', shop_id: 324, releaseYear: 2009 }
    ]);
  });

  it('original object has not been mutated', () => {
    const album = [
      { name: 'Grammatics', shop: 'Grammatics', releaseYear: 2009 }
    ];
    const artistReference = { Grammatics: 9923 };
    const aritstAlbumId = [
      { name: 'Grammatics', shop_id: 9923, releaseYear: 2009 }
    ];
    //act
    const artistAlbum = swapNameForID(album, artistReference);
    //assert
    expect(album).toEqual([{name: 'Grammatics', shop: 'Grammatics', releaseYear: 2009}]);
  })
});
