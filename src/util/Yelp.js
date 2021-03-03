const apiKey = 'r838ouJvSE78S8gPJ_s94AgX0ZeE1P7TmiqMcNfzSnEE_gaY4k2Npfd4DmdPPBTKZ9GdUjcolPObF2BJhdrmy7xX2rUdUwJ_BL0-_yufgaxv_6euZxwCTaom61D4X3Yx';


const Yelp = {
    search(term, location, sortBy) {
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          }));
        }
      });
    }
  };


  export default Yelp;
  
