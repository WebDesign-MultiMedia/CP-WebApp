const nav = document.getElementById('Bar');

nav.addEventListener("click", () => {
    
    const navList = document.getElementById('nav-links');
    const backgroundNav = document.getElementById('bg-nav');

    
     if(navList.style.display === 'block'){
        navList.style.display = 'none';
        backgroundNav.style.display = 'none';
     } else{
        navList.style.display = 'block';
        backgroundNav.style.display = 'block';
        backgroundNav.style.zIndex = '3';
        navList.style.zIndex = '3';
        nav.style.zIndex ='5';
        backgroundNav.style.position = 'fixed';
        backgroundNav.style.height = '900px';

     }
      
    
    });





  
  const btn = document.getElementById('btn');
  btn.style.position = 'relative';

  btn.addEventListener("mouseenter", () =>{
      btn.style.backgroundColor = 'red';
 
  });

  btn.addEventListener("mouseleave", () =>{
    btn.style.backgroundColor = 'gold';
});
  
  btn.addEventListener('click', () =>{
    const pBox = document.getElementById('Scroll-box');
 
    if(pBox.style.display === 'block'){
      pBox.style.display = 'none';
    } else{
      pBox.style.display = 'block';

    }

  });





async function initMap() {
    // Request needed libraries.
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    const center = { lat: 40.82389473548348, lng: -73.9126796264307 };
    const map = new Map(document.getElementById("map"), {
      zoom: 12,
      center,
      mapId: "4504f8b37365c3d0",
    });
  
    for (const property of properties) {
      const AdvancedMarkerElement = new google.maps.marker.AdvancedMarkerElement({
        map,
        content: buildContent(property),
        position: property.position,
        title: property.description,
      });
  
      AdvancedMarkerElement.addListener("click", () => {
        toggleHighlight(AdvancedMarkerElement, property);
      });
    }
  }
  
  function toggleHighlight(markerView, property) {
    if (markerView.content.classList.contains("highlight")) {
      markerView.content.classList.remove("highlight");
      markerView.zIndex = null;
    } else {
      markerView.content.classList.add("highlight");
      markerView.zIndex = 1;
    }
  }
  
  function buildContent(property) {
    const content = document.createElement("div");
  
    content.classList.add("property");
    content.innerHTML = `
           <div class="icon">
           <i aria-hidden="true" class="fa-sharp-duotone fa- fa-${property.type}" title="${property.type}"></i>
            <span class="fa-sr-only">${property.type}</span>
    </div>

    <div class="details">

        <div class="locateName">${property.locateName}</div>
         <div class="address">${property.address}</div>


        <div class="features">
        
                <div>
                    <span class="regular"></span>
                    <span>${property.regular}</span>
                </div>

                  <div>
                      <span class="premium"></span>
                      <span>${property.premium}</span>
                  </div>



        </div>

    </div>
      `;
    return content;
  }
  
  const properties = [

    {
      address: "91 Westchester Square, Bronx, NY",
      locateName: "BP Gas Station",
       regular: "none",
       premium: " ",
      type: "gas-pump",
      position: {
        lat: 40.8426,
        lng: -73.8448,
      },
    },
  
    {
      address: "1500 Williamsbridge Rd, Bronx, NY",
      locateName: "Sunco",
       regular: "$3.69",
       premium: "no display",
      type: "gas-pump",
      position: {
        lat: 40.8499,
        lng: -73.8665,
      },
    
    },
    {
      address: "2400 E Tremont Ave, Bronx, NY",
      locateName: "Exxon",
       regular: "$3.57",
       premium:"",
      type: "gas-pump",
      position: {
        lat: 40.8419,
        lng: -73.8501,
      },
    },
  
    {
     address: "3209 Eastchester Rd, Bronx, NY",
      locateName: "Sunoco",
       regular: "$3.65",
       premium:"",
       type: "gas-pump",
       position: {
        lat: 40.8753,
        lng: -73.8478,
      },
    },
    {
      address: " 4765 White Plains Rd, Bronx, NY",
      locateName: "Shell",
       regular: "$3.63",
       premium:"",
       type: "gas-pump",
       position: {
        lat: 40.8964,
        lng: -73.8567,
      },
    },
    {
      address: " 5785 Broadway, Bronx, NY",
      locateName: "Mobil",
       regular: "$3.71",
       premium:"",
       type: "gas-pump",
       position: {
        lat: 40.8796,
        lng: -73.9050,
      },
    },
    {
      address: "1755 Jerome Ave, Bronx, NY",
      locateName: "BP",
       regular: "$3.64",
       premium:"",
       type: "gas-pump",
       position: {
        lat: 40.8462,
        lng: -73.9131,
      },
    },
    {
      address: "1220 Castle Hill Ave, Bronx, NY",
      locateName: "Gulf",
       regular: "$3.61",
       premium:"",
       type: "gas-pump",
       position: {
        lat: 40.8321,
        lng: -73.8506,
      },
    },
    {
      address: "325 E 161st St, Bronx, NY",
      locateName: "Shell",
       regular: "$3.66",
       premium:"",
       type: "gas-pump",
       position: {
        lat: 40.8240,
        lng: -73.9173,
      },
    },
  
    {
      address: "209 E 149th St, Bronx, NY",
      locateName: "Chevron",
       regular: "$3.62",
       premium:"",
       type: "gas-pump",
       position: {
        lat: 40.8161,
        lng: -73.9199,
      },
    },
  
    {
      address: "2601 Boston Rd, Bronx, NY",
      locateName: "Mobil",
       regular: "$3.58",
       premium:"",
       type: "gas-pump",
       position: {
        lat: 40.8604,
        lng: -73.8703, },
  },
  
  {
    address: "2020 Webster Ave, Bronx, NY",
    locateName: "Shell",
     regular: "$3.68",
     premium:"",
     type: "gas-pump",
     position: {
      lat: 40.8521,
      lng: -73.9008, },
  },
  
  
  {
    address: "2 W Kingsbridge Rd, Bronx, NY",
    locateName: "Exxon",
     regular: "$3.56",
     premium:"",
     type: "gas-pump",
     position: {
      lat: 40.8702,
      lng: -73.8969, },
  },
  
  
  {
    address: "1672 Grand Concourse, Bronx, NY",
    locateName: "Gulf",
     regular: "$3,60",
     premium:"",
     type: "gas-pump",
     position: {
      lat: 40.8453,
      lng: -73.9113, },
  },
  
  
  {
    address: "101 Bruckner Blvd, Bronx, NY",
    locateName: "Bp",
     regular: "$3.67",
     premium:"",
     type: "gas-pump",
     position: {
      lat: 40.8071,
      lng: -73.9177, },
  },
  
  {
    address: "2801 Webster Ave, Bronx, NY",
    locateName: "Shell",
     regular: "$3.63",
     premium:"",
     type: "gas-pump",
     position: {
      lat: 40.8707 ,
      lng: -73.8874, },
  },
  
  
  {
    address: "1011 Ogden Ave, Bronx, NY",
    locateName: "Chevron",
     regular: "$3.62",
     premium:"",
     type: "gas-pump",
     position: {
      lat: 40.8414 ,
      lng: -73.9271 , },
  },
  
  {
    address: "291 E 149th St, Bronx, NY",
    locateName: "Gulf",
     regular: "$3.59",
     premium:"",
     type: "gas-pump",
     position: {
      lat: 40.8168 ,
      lng: -73.9172, },
  },
  
  {
    address: "4325 Boston Rd, Bronx, NY",
    locateName: "Shell",
     regular: "$3.64",
     premium:"",
     type: "gas-pump",
     position: {
      lat: 40.8882,
      lng:-73.8364 , },
  },
  
  {
    address: "2549 Boston Rd, Bronx, NY",
    locateName: "Bp",
     regular: "$3.57",
     premium:"",
     type: "gas-pump",
     position: {
      lat: 40.8589,
      lng: -73.8706, },
  },

    {
      address: "303 W 96th St, New York, NY 10025",
      locateName: "Bolla Market",
      regular: "$4.89",
      premium: "N/A",
      type: "gas-pump",
      position: {
        lat: 40.7941,
        lng: -73.9728,
      },
    },
    {
      address: "1599 Lexington Ave, New York, NY 10029",
      locateName: "Shell",
      regular: "$3.58",
      premium: "N/A",
          type: "gas-pump",
  
      position: {
        lat: 40.7909,
        lng: -73.9454,
      },
    },
    {
      address: "1855 1st Ave, New York, NY 10128",
      locateName: "Shell",
      regular: "$3.58",
      premium: "N/A",
          type: "gas-pump",
  
      position: {
        lat: 40.7825,
        lng: -73.9449,
      },
    },
    {
      address: "348 E 106th St, New York, NY 10029",
      locateName: "East Sides Auto Service",
      regular: "$3.69",
      premium: "N/A",
          type: "gas-pump",
  
      position: {
        lat: 40.7912,
        lng: -73.9361,
      },
    },
    {
      address: "117 Morningside Ave, New York, NY 10027",
      locateName: "Shell",
      regular: "$3.89",
      premium: "N/A",
          type: "gas-pump",
  
      position: {
        lat: 40.8105,
        lng: -73.9577,
      },
    },
  



  //   Manhattan Gas station
    {
      address: "303 W 96th St, New York, NY 10025",
      locateName: "Bolla Market",
      regular: "$4.89",
      premium: "N/A",
          type: "gas-pump",
  
      position: {
        lat: 40.7941,
        lng: -73.9728,
      },
    },
    {
      address: "1599 Lexington Ave, New York, NY 10029",
      locateName: "Shell",
      regular: "$3.58",
      premium: "N/A",
          type: "gas-pump",
  
      position: {
        lat: 40.7909,
        lng: -73.9454,
      },
    },
    {
      address: "1855 1st Ave, New York, NY 10128",
      locateName: "Shell",
      regular: "$3.58",
      premium: "N/A",
          type: "gas-pump",
  
      position: {
        lat: 40.7825,
        lng: -73.9449,
      },
    },
    {
      address: "348 E 106th St, New York, NY 10029",
      locateName: "East Sides Auto Service",
      regular: "$3.69",
      premium: "N/A",
          type: "gas-pump",
  
      position: {
        lat: 40.7912,
        lng: -73.9361,
      },
    },
    {
      address: "117 Morningside Ave, New York, NY 10027",
      locateName: "Shell",
      regular: "$3.89",
      premium: "N/A",
          type: "gas-pump",
  
      position: {
        lat: 40.8105,
        lng: -73.9577,
      },
    },
    {
      address: "2276 1st Ave, New York, NY 10035",
      locateName: "Shell",
      regular: "$3.54",
      premium: "N/A",
          type: "gas-pump",
  
      position: {
        lat: 40.8015,
        lng: -73.9337,
      },
    },
    {
      address: "2326 1st Ave, New York, NY 10035",
      locateName: "BP",
      regular: "$3.52",
      premium: "N/A",
          type: "gas-pump",
  
      position: {
        lat: 40.8021,
        lng: -73.9331,
      },
    },
    {
      address: "1890 Park Ave, New York, NY 10035",
      locateName: "Eastside Gas",
      regular: "$3.59",
      premium: "N/A",
          type: "gas-pump",
  
      position: {
        lat: 40.8059,
        lng: -73.9388,
      },
    },
    {
      address: "338 W 145th St, New York, NY 10031",
      locateName: "Exxon",
      regular: "$3.49",
      premium: "$4.09",
          type: "gas-pump",
  
      position: {
        lat: 40.8248,
        lng: -73.9454,
      },
    },
    {
      address: "170 E 125th St, New York, NY 10035",
      locateName: "Sunoco",
      regular: "$3.69",
      premium: "$4.29",
          type: "gas-pump",
  
      position: {
        lat: 40.8046,
        lng: -73.9368,
      },
    },
    {
      address: "224 E 96th St, New York, NY 10128",
      locateName: "Mobil",
      regular: "$3.79",
      premium: "$4.39",
          type: "gas-pump",
  
      position: {
        lat: 40.7840,
        lng: -73.9475,
      },
    },
    {
      address: "3276 Broadway, New York, NY 10027",
      locateName: "BP",
      regular: "$3.89",
      premium: "$4.49",
          type: "gas-pump",
  
      position: {
        lat: 40.8183,
        lng: -73.9577,
      },
    },
    {
      address: "511 W 145th St, New York, NY 10031",
      locateName: "Sunoco",
      regular: "$3.79",
      premium: "$4.39",
          type: "gas-pump",
  
      position: {
        lat: 40.8256,
        lng: -73.9491,
      },
    },
    {
      address: "613 W 207th St, New York, NY 10034",
      locateName: "Shell",
      regular: "$3.99",
      premium: "$4.59",
          type: "gas-pump",
  
      position: {
        lat: 40.8674,
        lng: -73.9219,
      },
    },
    {
      address: "2146 3rd Ave, New York, NY 10035",
      locateName: "BP",
      regular: "$3.59",
      premium: "$4.19",
          type: "gas-pump",
  
      position: {
        lat: 40.8013,
        lng: -73.9372,
      },
    },
    {
      address: "466 10th Ave, New York, NY 10018",
      locateName: "Mobil",
      regular: "$4.59",
      premium: "$4.99",
          type: "gas-pump",
  
      position: {
        lat: 40.756388,
        lng: -73.996724,
      },
    },
    {
      address: "510 W 23rd St, New York, NY 10011",
      locateName: "BP",
      regular: "$4.49",
      premium: "$4.89",
          type: "gas-pump",
  
      position: {
        lat: 40.748963,
        lng: -74.004712,
      },
    },
    {
      address: "99 2nd Ave, New York, NY 10003",
      locateName: "Shell",
      regular: "$4.55",
      premium: "$4.95",
          type: "gas-pump",
  
      position: {
        lat: 40.726528,
        lng: -73.989293,
      },
    },
    {
      address: "287 Hudson St, New York, NY 10013",
      locateName: "Sunoco",
      regular: "$4.69",
      premium: "$5.09",
          type: "gas-pump",
  
      position: {
        lat: 40.726304,
        lng: -74.007149,
      },
    },
    {
      address: "354 W St, New York, NY 10014",
      locateName: "Chevron",
      regular: "$4.63",
      premium: "$5.03",
          type: "gas-pump",
  
      position: {
        lat: 40.732228,
        lng: -74.008927,
      },
    },
    {
      address: "239 Houston St, New York, NY 10002",
      locateName: "Gulf",
      regular: "$4.58",
      premium: "$4.98",
          type: "gas-pump",
  
      position: {
        lat: 40.723961,
        lng: -73.989962,
      },
    },
    {
      address: "184 Varick St, New York, NY 10014",
      locateName: "Exxon",
      regular: "$4.61",
      premium: "$5.01",
          type: "gas-pump",
  
      position: {
        lat: 40.727222,
        lng: -74.005121,
      },
    },
    {
      address: "552 W 42nd St, New York, NY 10036",
      locateName: "Texaco",
      regular: "$4.57",
      premium: "$4.97",
          type: "gas-pump",
  
      position: {
        lat: 40.760332,
        lng: -73.995689,
      },
    },
    {
      address: "93 1st Ave, New York, NY 10003",
      locateName: "Valero",
      regular: "$4.52",
      premium: "$4.92",
          type: "gas-pump",
  
      position: {
        lat: 40.726658,
        lng: -73.987689,
      },
    },
    {
      address: "334 W 14th St, New York, NY 10014",
      locateName: "Lukoil",
      regular: "$4.54",
      premium: "$4.94",
          type: "gas-pump",
  
      position: {
        lat: 40.739455,
        lng: -74.005359,
      },
    },
  
  


        // Brooklyn Gas Station




    {
      address: "640 S Conduit Blvd, Brooklyn, NY 11208",
      locateName: "Grand Slam Wash and Gas",
      regular: "$3.59",
      premium: "$3.89",
          type: "gas-pump",
  
      position: {
        lat: 40.661373,
        lng: -73.867278,
      },
    },
    {
      address: "278 Greenpoint Ave, Brooklyn, NY 11222",
      locateName: "Sonomax",
      regular: "$3.61",
      premium: "$3.91",
          type: "gas-pump",
  
      position: {
        lat: 40.728214,
        lng: -73.955166,
      },
    },
    {
      address: "497 Meeker Ave, Brooklyn, NY 11222",
      locateName: "Bolla Market",
      regular: "$3.63",
      premium: "$3.93",
          type: "gas-pump",
  
      position: {
        lat: 40.714965,
        lng: -73.941577,
      },
    },
    {
      address: "1022 Rockaway Ave, Brooklyn, NY 11236",
      locateName: "Mobil",
      regular: "$3.65",
      premium: "$3.95",
          type: "gas-pump",
  
      position: {
        lat: 40.645979,
        lng: -73.898414,
      },
    },
    {
      address: "5808 Flatlands Ave, Brooklyn, NY 11236",
      locateName: "Shell",
      regular: "$3.69",
      premium: "$3.99",
          type: "gas-pump",
  
      position: {
        lat: 40.633333,
        lng: -73.921864,
      },
    },
    {
      address: "463 N Conduit Blvd, Brooklyn, NY 11208",
      locateName: "Mobil",
      regular: "$3.69",
      premium: "$3.99",
          type: "gas-pump",
  
      position: {
        lat: 40.678162,
        lng: -73.871229,
      },
    },
    {
      address: "1610 Utica Ave, Brooklyn, NY 11234",
      locateName: "Conoco Gas Station and Diesel",
      regular: "$3.69",
      premium: "$3.99",
          type: "gas-pump",
  
      position: {
        lat: 40.634616,
        lng: -73.930915,
      },
    },
    {
      address: "1149 Utica Ave, Brooklyn, NY 11203",
      locateName: "BP",
      regular: "$3.70",
      premium: "$4.00",
          type: "gas-pump",
  
      position: {
        lat: 40.641277,
        lng: -73.925365,
      },
    },
    {
      address: "401 E 80th St, Brooklyn, NY 11236",
      locateName: "BP",
      regular: "$3.75",
      premium: "$4.05",
          type: "gas-pump",
  
      position: {
        lat: 40.619584,
        lng: -73.909513,
      },
    },
    {
      address: "5001 Kings Hwy, Brooklyn, NY 11234",
      locateName: "BP",
      regular: "$3.75",
      premium: "$4.05",
          type: "gas-pump",
  
      position: {
        lat: 40.622318,
        lng: -73.930536,
      },
    },
    {
      address: "6002 18th Ave, Brooklyn, NY 11204",
      locateName: "BP",
      regular: "$3.39",
      premium: "$4.19",
          type: "gas-pump",
  
      position: {
        lat: 40.620702,
        lng: -73.984686,
      },
    },
    {
      address: "1781 Bay Ridge Pkwy, Brooklyn, NY 11204",
      locateName: "BP",
      regular: "$3.39",
      premium: "$4.19",
          type: "gas-pump",
  
      position: {
        lat: 40.6175,
        lng: -73.990933,
      },
    },
    {
      address: "5808 Flatlands Ave, Brooklyn, NY 11236",
      locateName: "Shell",
      regular: "$3.69",
      premium: "$3.99",
          type: "gas-pump",
  
      position: {
        lat: 40.628864,
        lng: -73.921864,
      },
    },
    {
      address: "497 Meeker Ave, Brooklyn, NY 11222",
      locateName: "Bolla Market",
      regular: "$3.63",
      premium: "$3.93",
          type: "gas-pump",
  
      position: {
        lat: 40.718524,
        lng: -73.951489,
      },
    },
    {
      address: "401 E 80th St, Brooklyn, NY 11236",
      locateName: "BP",
      regular: "$3.75",
      premium: "$4.05",
          type: "gas-pump",
  
      position: {
        lat: 40.619584,
        lng: -73.909513,
      },
    },
    {
      address: "1022 Rockaway Ave, Brooklyn, NY 11236",
      locateName: "Mobil",
      regular: "$3.65",
      premium: "$3.95",
          type: "gas-pump",
  
      position: {
        lat: 40.642841,
        lng: -73.896423,
      },
    },
    {
      address: "640 S Conduit Blvd, Brooklyn, NY 11208",
      locateName: "Grand Slam Wash and Gas",
      regular: "$3.59",
      premium: "$3.89",
          type: "gas-pump",
  
      position: {
        lat: 40.661373,
        lng: -73.867278,
      },
    },
    {
      address: "278 Greenpoint Ave, Brooklyn, NY 11222",
      locateName: "Sonomax",
      regular: "$3.61",
      premium: "$3.91",
          type: "gas-pump",
  
      position: {
        lat: 40.728214,
        lng: -73.955166,
      },
    },
    {
      address: "1149 Utica Ave, Brooklyn, NY 11203",
      locateName: "BP",
      regular: "$3.70",
      premium: "$4.00",
          type: "gas-pump",
  
      position: {
        lat: 40.635116,
        lng: -73.930091,
      },
    },
    {
      address: "6002 18th Ave, Brooklyn, NY 11204",
      locateName: "BP",
      regular: "$3.39",
      premium: "$4.19",
          type: "gas-pump",
  
      position: {
        lat: 40.620702,
        lng: -73.984686,
      },
    },
    {
      address: "1502 Atlantic Ave, Brooklyn, NY 11213",
      locateName: "Shell",
      regular: "$3.79",
      premium: "$4.09",
          type: "gas-pump",
  
      position: {
        lat: 40.677962,
        lng: -73.932295,
      },
    },
    {
      address: "2501 Knapp St, Brooklyn, NY 11235",
      locateName: "BP",
      regular: "$3.74",
      premium: "$4.04",
          type: "gas-pump",
  
      position: {
        lat: 40.590878,
        lng: -73.935472,
      },
    },
    {
      address: "2484 Coney Island Ave, Brooklyn, NY 11223",
      locateName: "Mobil",
      regular: "$3.76",
      premium: "$4.06",
          type: "gas-pump",
  
      position: {
        lat: 40.597389,
        lng: -73.962222,
      },
    },
    {
      address: "1208 Pennsylvania Ave, Brooklyn, NY 11207",
      locateName: "Gulf",
      regular: "$3.68",
      premium: "$3.98",
          type: "gas-pump",
  
      position: {
        lat: 40.657132,
        lng: -73.883305,
      },
    },
    {
      address: "920 Utica Ave, Brooklyn, NY 11203",
      locateName: "Sunoco",
      regular: "$3.71",
      premium: "$4.01",
          type: "gas-pump",
  
      position: {
        lat: 40.645813,
        lng: -73.929132,
      },
    },
    {
      address: "1551 Myrtle Ave, Brooklyn, NY 11237",
      locateName: "Valero",
      regular: "$3.64",
      premium: "$3.94",
          type: "gas-pump",
  
      position: {
        lat: 40.698523,
        lng: -73.917624,
      },
    },
    {
      address: "2225 Atlantic Ave, Brooklyn, NY 11233",
      locateName: "Exxon",
      regular: "$3.77",
      premium: "$4.07",
          type: "gas-pump",
  
      position: {
        lat: 40.674515,
        lng: -73.909863,
      },
    },
    {
      address: "335 Bushwick Ave, Brooklyn, NY 11206",
      locateName: "BP",
      regular: "$3.75",
      premium: "$4.05",
          type: "gas-pump",
  
      position: {
        lat: 40.703417,
        lng: -73.937511,
      },
    },
    {
      address: "2517 Atlantic Ave, Brooklyn, NY 11207",
      locateName: "Shell",
      regular: "$3.70",
      premium: "$4.00",
          type: "gas-pump",
  
      position: {
        lat: 40.674571,
        lng: -73.894134,
      },
    },
    {
      address: "1885 Broadway, Brooklyn, NY 11207",
      locateName: "Chevron",
      regular: "$3.67",
      premium: "$3.97",
          type: "gas-pump",
  
      position: {
        lat: 40.678178,
        lng: -73.905454,
      },
    },
    {
      address: "1589 Bedford Ave, Brooklyn, NY 11225",
      locateName: "Mobil",
      regular: "$3.72",
      premium: "$4.02",
          type: "gas-pump",
  
      position: {
        lat: 40.668062,
        lng: -73.956994,
      },
    },
    {
      address: "2506 Linden Blvd, Brooklyn, NY 11208",
      locateName: "Lukoil",
      regular: "$3.73",
      premium: "$4.03",
          type: "gas-pump",
  
      position: {
        lat: 40.670515,
        lng: -73.880823,
      },
    },
    {
      address: "1120 Pennsylvania Ave, Brooklyn, NY 11207",
      locateName: "Speedway",
      regular: "$3.62",
      premium: "$3.92",
          type: "gas-pump",
  
      position: {
        lat: 40.656128,
        lng: -73.880751,
      },
    },
    {
      address: "5702 Flatlands Ave, Brooklyn, NY 11234",
      locateName: "Exxon",
      regular: "$3.79",
      premium: "$4.09",
          type: "gas-pump",
  
      position: {
        lat: 40.632525,
        lng: -73.921054,
      },
    },
    {
      address: "1380 Atlantic Ave, Brooklyn, NY 11216",
      locateName: "BP",
      regular: "$3.70",
      premium: "$4.00",
          type: "gas-pump",
  
      position: {
        lat: 40.678173,
        lng: -73.952617,
      },
    },
    {
      address: "6101 Foster Ave, Brooklyn, NY 11236",
      locateName: "Mobil",
      regular: "$3.69",
      premium: "$3.99",
          type: "gas-pump",
  
      position: {
        lat: 40.640317,
        lng: -73.913645,
      },
    },
    {
      address: "2297 Bedford Ave, Brooklyn, NY 11226",
      locateName: "Sunoco",
      regular: "$3.75",
      premium: "$4.05",
          type: "gas-pump",
  
      position: {
        lat: 40.644582,
        lng: -73.954739,
      },
    },
    {
      address: "6901 Bay Pkwy, Brooklyn, NY 11204",
      locateName: "BP",
      regular: "$3.67",
      premium: "$3.97",
          type: "gas-pump",
  
      position: {
        lat: 40.618252,
        lng: -73.986438,
      },
    },
    {
      address: "350 Clarkson Ave, Brooklyn, NY 11226",
      locateName: "Shell",
      regular: "$3.73",
      premium: "$4.03",
          type: "gas-pump",
  
      position: {
        lat: 40.656814,
        lng: -73.948948,
      },
    },
    {
      address: "1407 Broadway, Brooklyn, NY 11221",
      locateName: "Exxon",
      regular: "$3.74",
      premium: "$4.04",
          type: "gas-pump",
  
      position: {
        lat: 40.693156,
        lng: -73.919326,
      },
    },
    {
      address: "1044 Flatbush Ave, Brooklyn, NY 11226",
      locateName: "Chevron",
      regular: "$3.66",
      premium: "$3.96",
          type: "gas-pump",
  
      position: {
        lat: 40.649962,
        lng: -73.957721,
      },
    },
    {
      address: "2097 Utica Ave, Brooklyn, NY 11234",
      locateName: "Gulf",
      regular: "$3.71",
      premium: "$4.01",
          type: "gas-pump",
  
      position: {
        lat: 40.635951,
        lng: -73.928664,
      },
    },
    {
      address: "1516 Rockaway Pkwy, Brooklyn, NY 11236",
      locateName: "Valero",
      regular: "$3.68",
      premium: "$3.98",
          type: "gas-pump",
  
      position: {
        lat: 40.640556,
        lng: -73.894779,
      },
    },
    {
      address: "1310 Bushwick Ave, Brooklyn, NY 11207",
      locateName: "Shell",
      regular: "$3.65",
      premium: "$3.95",
          type: "gas-pump",
  
      position: {
        lat: 40.688856,
        lng: -73.908652,
      },
    },
    {
      address: "1219 Atlantic Ave, Brooklyn, NY 11216",
      locateName: "Mobil",
      regular: "$3.72",
      premium: "$4.02",
          type: "gas-pump",
  
      position: {
        lat: 40.677125,
        lng: -73.950497,
      },
    },
    {
      address: "455 Myrtle Ave, Brooklyn, NY 11205",
      locateName: "BP",
      regular: "$3.75",
      premium: "$4.05",
          type: "gas-pump",
  
      position: {
        lat: 40.694728,
        lng: -73.968395,
      },
    },
    {
      address: "6301 Foster Ave, Brooklyn, NY 11236",
      locateName: "Lukoil",
      regular: "$3.73",
      premium: "$4.03",
          type: "gas-pump",
  
      position: {
        lat: 40.642612,
        lng: -73.913054,
      },
    },
  
  
      // Queens Gas station
      {
        address: "89-04 Astoria Blvd, Queens, NY 11369",
        locateName: "BP",
        regular: "$3.79",
        premium: "$4.09",
            type: "gas-pump",
  
        position: {
          lat: 40.764813,
          lng: -73.873489,
        },
      },
      {
        address: "45-11 30th Ave, Queens, NY 11103",
        locateName: "Shell",
        regular: "$3.82",
        premium: "$4.12",
            type: "gas-pump",
  
        position: {
          lat: 40.762851,
          lng: -73.909758,
        },
      },
      {
        address: "164-10 Cross Bay Blvd, Queens, NY 11414",
        locateName: "Sunoco",
        regular: "$3.85",
        premium: "$4.15",
            type: "gas-pump",
  
        position: {
          lat: 40.654962,
          lng: -73.842741,
        },
      },
      {
        address: "20-15 31st St, Queens, NY 11105",
        locateName: "Mobil",
        regular: "$3.81",
        premium: "$4.11",
            type: "gas-pump",
  
        position: {
          lat: 40.774584,
          lng: -73.908118,
        },
      },
      {
        address: "31-05 Northern Blvd, Queens, NY 11101",
        locateName: "BP",
        regular: "$3.77",
        premium: "$4.07",
            type: "gas-pump",
  
        position: {
          lat: 40.753536,
          lng: -73.932487,
        },
      },
      {
        address: "25-08 Queens Plaza S, Queens, NY 11101",
        locateName: "Exxon",
        regular: "$3.84",
        premium: "$4.14",
            type: "gas-pump",
  
        position: {
          lat: 40.749578,
          lng: -73.940872,
        },
      },
      {
        address: "79-12 Northern Blvd, Queens, NY 11372",
        locateName: "Shell",
        regular: "$3.76",
        premium: "$4.06",
            type: "gas-pump",
  
        position: {
          lat: 40.752255,
          lng: -73.887134,
        },
      },
      {
        address: "59-14 Fresh Pond Rd, Queens, NY 11385",
        locateName: "BP",
        regular: "$3.73",
        premium: "$4.03",
            type: "gas-pump",
  
        position: {
          lat: 40.707426,
          lng: -73.897728,
        },
      },
      {
        address: "90-02 Roosevelt Ave, Queens, NY 11372",
        locateName: "Exxon",
        regular: "$3.78",
        premium: "$4.08",
            type: "gas-pump",
  
        position: {
          lat: 40.748235,
          lng: -73.877594,
        },
      },
      {
        address: "95-19 63rd Dr, Queens, NY 11374",
        locateName: "Mobil",
        regular: "$3.72",
        premium: "$4.02",
            type: "gas-pump",
  
        position: {
          lat: 40.728417,
          lng: -73.861234,
        },
      },
      {
        address: "111-10 Astoria Blvd, Queens, NY 11369",
        locateName: "Gulf",
        regular: "$3.80",
        premium: "$4.10",
            type: "gas-pump",
  
        position: {
          lat: 40.764168,
          lng: -73.878798,
        },
      },
      {
        address: "90-07 Merrick Blvd, Queens, NY 11432",
        locateName: "Sunoco",
        regular: "$3.74",
        premium: "$4.04",
            type: "gas-pump",
  
        position: {
          lat: 40.704914,
          lng: -73.789496,
        },
      },
      {
        address: "45-05 20th Ave, Queens, NY 11105",
        locateName: "BP",
        regular: "$3.79",
        premium: "$4.09",
            type: "gas-pump",
  
        position: {
          lat: 40.771832,
          lng: -73.908675,
        },
      },
      {
        address: "172-01 Northern Blvd, Queens, NY 11358",
        locateName: "Mobil",
        regular: "$3.75",
        premium: "$4.05",
            type: "gas-pump",
  
        position: {
          lat: 40.759663,
          lng: -73.796582,
        },
      },
      {
        address: "72-09 Queens Blvd, Queens, NY 11377",
        locateName: "Shell",
        regular: "$3.68",
        premium: "$3.98",
            type: "gas-pump",
  
        position: {
          lat: 40.734089,
          lng: -73.895183,
        },
      },
      {
        address: "144-30 Jamaica Ave, Queens, NY 11435",
        locateName: "BP",
        regular: "$3.71",
        premium: "$4.01",
            type: "gas-pump",
  
        position: {
          lat: 40.702813,
          lng: -73.808602,
        },
      },
      {
        address: "68-15 Queens Blvd, Queens, NY 11377",
        locateName: "Exxon",
        regular: "$3.80",
        premium: "$4.10",
            type: "gas-pump",
  
        position: {
          lat: 40.733451,
          lng: -73.893715,
        },
      },
      {
        address: "74-07 Grand Ave, Queens, NY 11373",
        locateName: "Sunoco",
        regular: "$3.73",
        premium: "$4.03",
            type: "gas-pump",
  
        position: {
          lat: 40.726944,
          lng: -73.879182,
        },
      },
      {
        address: "60-05 Metropolitan Ave, Queens, NY 11385",
        locateName: "Mobil",
        regular: "$3.77",
        premium: "$4.07",
            type: "gas-pump",
  
        position: {
          lat: 40.714536,
          lng: -73.904231,
        },
      },
      {
        address: "23-01 31st St, Queens, NY 11105",
        locateName: "BP",
        regular: "$3.78",
        premium: "$4.08",
            type: "gas-pump",
  
        position: {
          lat: 40.774761,
          lng: -73.909193,
        },
      },
      {
        address: "91-05 Springfield Blvd, Queens, NY 11428",
        locateName: "Shell",
        regular: "$3.70",
        premium: "$4.00",
            type: "gas-pump",
  
        position: {
          lat: 40.719011,
          lng: -73.739993,
        },
      },
      {
        address: "35-01 Northern Blvd, Queens, NY 11101",
        locateName: "Mobil",
        regular: "$3.71",
        premium: "$4.01",
            type: "gas-pump",
  
        position: {
          lat: 40.754196,
          lng: -73.932256,
        },
      },
      {
        address: "94-06 Astoria Blvd, Queens, NY 11369",
        locateName: "BP",
        regular: "$3.82",
        premium: "$4.12",
            type: "gas-pump",
  
        position: {
          lat: 40.764003,
          lng: -73.872117,
        },
      },
      {
        address: "103-01 Northern Blvd, Queens, NY 11368",
        locateName: "Shell",
        regular: "$3.85",
        premium: "$4.15",
            type: "gas-pump",
  
        position: {
          lat: 40.757001,
          lng: -73.862922,
        },
      },
      {
        address: "104-02 Roosevelt Ave, Queens, NY 11368",
        locateName: "Mobil",
        regular: "$3.81",
        premium: "$4.11",
            type: "gas-pump",
  
        position: {
          lat: 40.755987,
          lng: -73.861527,
        },
      },
      {
        address: "61-05 Queens Blvd, Queens, NY 11377",
        locateName: "Gulf",
        regular: "$3.69",
        premium: "$3.99",
            type: "gas-pump",
  
        position: {
          lat: 40.742694,
          lng: -73.895034,
        },
      },
//   TIRE SHOPS THE BRONX NYC
        {
          address: "1077 Intervale Ave, Bronx, NY 10459",
          locateName: "El Terrible Tire Shop",
          regular: "$15 per hole",
          premium: "",
          type: "tire-flat",
          position: {
            lat: 40.825823,
            lng: -73.891011,
          },
        },
        {
          address: "1024 Leggett Ave, Bronx, NY 10455",
          locateName: "Smart Tire Shop & Flat Fix",
          regular: "$20 per hole",
          premium: "Flat fix,um: balancing, new and used",
          type: "tire-flat",
          position: {
            lat: 40.813003,
            lng: -73.893562,
          },
        },
        {
          address: "1530 Stillwell Ave, Bronx, NY 10461",
          locateName: "Miller Tires",
          regular: "$25 per hole",
          premium: "Tire patching, brake replacement, wheel balancin",
          type: "tire-flat",
          position: {
            lat: 40.842374,
            lng: -73.841931,
          },
        },
        {
          address: "1611 E 233rd St, Bronx, NY 10466",
          locateName: "Paradise Discount Tire & Wheels",
          regular: "$20 per hole",
          premium: "Flat fix, mounting, usedum: sale",
          type: "tire-flat",
          position: {
            lat: 40.890321,
            lng: -73.837754,
          },
        },
        {
          address: "1800 E Tremont Ave, Bronx, NY 10460",
          locateName: "Day & Night Auto Repair & Tire Shop",
          regular: "$25 per hole",
          premium: "24/7 service, repair, installation",
          type: "tire-flat",
          position: {
            lat: 40.841217,
            lng: -73.867334,
          },
        },
        {
          address: "381 E 149th St, Bronx, NY 10455",
          locateName: "A1 Tires",
          regular: "$20 per hole",
          premium: "Flat repair, rotation, sale",
          type: "tire-flat",
          position: {
            lat: 40.814176,
            lng: -73.919356,
          },
        },
        {
          address: "1235 E Gun Hill Rd, Bronx, NY 10469",
          locateName: "Gun Hill Tire & Wheel",
          regular: "$25 per hole",
          premium: "Tire repair, wheel alignment",
          type: "tire-flat",
          position: {
            lat: 40.869872,
            lng: -73.848833,
          },
        },
        {
          address: "2359 Jerome Ave, Bronx, NY 10468",
          locateName: "Jerome Tire Shop",
          regular: "$18 per hole",
          premium: "Flat repair, balancing",
          type: "tire-flat",
          position: {
            lat: 40.861197,
            lng: -73.897134,
          },
        },
        {
          address: "1952 Webster Ave, Bronx, NY 10457",
          locateName: "Webster Tire Repair",
          regular: "$15 per hole",
          premium: "Tire patching, replacement, wheel balancin",
          type: "tire-flat",
          position: {
            lat: 40.850452,
            lng: -73.898057,
          },
        },
        {
          address: "4255 White Plains Rd, Bronx, NY 10466",
          locateName: "White Plains Tire Shop",
          regular: "$20 per hole",
          premium: "Flat fix, mounting, usedum: sale",
          type: "tire-flat",
          position: {
            lat: 40.893028,
            lng: -73.854396,
          },
        },
        {
          address: "3456 Boston Rd, Bronx, NY 10469",
          locateName: "Boston Road Tire & Wheel",
          regular: "$25 per hole",
          premium: "Tire repair, wheel alignment",
          type: "tire-flat",
          position: {
            lat: 40.876933,
            lng: -73.851248,
          },
        },
        {
          address: "472 Hunts Point Ave, Bronx, NY 10474",
          locateName: "Hunts Point Tire Shop",
          regular: "$18 per hole",
          premium: "Flat repair, balancing",
          type: "tire-flat",
          position: {
            lat: 40.813437,
            lng: -73.880475,
          },
        },
        {
          address: "505 E 138th St, Bronx, NY 10454",
          locateName: "Mott Haven Tire Shop",
          regular: "$22 per hole",
          premium: "Tire patching, replacement, wheel balancin",
          type: "tire-flat",
          position: {
            lat: 40.806441,
            lng: -73.922236,
          },
        },
        {
          address: "2353 Westchester Ave, Bronx, NY 10461",
          locateName: "Westchester Tire Shop",
          regular: "$20 per hole",
          premium: "Flat fix,um: mounting, sales",
          type: "tire-flat",
          position: {
            lat: 40.840918,
            lng: -73.845158,
          },
        },
        {
          address: "1233 Ogden Ave, Bronx, NY 10452",
          locateName: "Ogden Tire Shop",
          regular: "$18 per hole",
          premium: "Tire repair, wheel alignment",
          type: "tire-flat",
          position: {
            lat: 40.841031,
            lng: -73.928482,
          },
        },
        {
          address: "789 E 169th St, Bronx, NY 10456",
          locateName: "Morrisania Tire Repair",
          regular: "$20 per hole",
          premium: "Flatum: repair, rotation, sale",
          type: "tire-flat",
          position: {
            lat: 40.831256,
            lng: -73.905491,
          },
        },
        {
          address: "2349 Prospect Ave, Bronx, NY 10458",
          locateName: "Prospect Tire Shop",
          regular: "$25 per hole",
          premium: "Tire patching, replacement, wheel balancin",
          type: "tire-flat",
          position: {
            lat: 40.853239,
            lng: -73.888346,
          },
        },
        {
          address: "678 E 138th St, Bronx, NY 10454",
          locateName: "Bruckner Tire Shop",
          regular: "$22 per hole",
          premium: "Flat fix, mounting, sale",
          type: "tire-flat",
          position: {
            lat: 40.804867,
            lng: -73.917651,
          },
        },
        {
          address: "3550 Jerome Ave, Bronx, NY 10467",
          locateName: "Norwood Tire Shop",
          regular: "$20 per hole",
          premium: "Tire repair, wheel alignment",
          type: "tire-flat",
          position: {
            lat: 40.877334,
            lng: -73.881989,
          },
        },
        {
          address: "945 E 233rd St, Bronx, NY 10466",
          locateName: "Baychester Tire Shop",
          regular: "$18 per hole",
          premium: "Flat repair,balancing",
          type: "tire-flat",
          position: {
            lat: 40.889097,
            lng: -73.850389,
          },
        },
        {
          address: "4011 Boston Rd, Bronx, NY 10466",
          locateName: "Edenwald Tire Shop",
          regular: "$20 per hole",
          premium: "Tire patching,replacement, wheel balancin",
          type: "tire-flat",
          position: {
            lat: 40.888939,
            lng: -73.846179,
          },
        },
        {
          address: "1430 Unionport Rd, Bronx, NY 10462",
          locateName: "Unionport Tire Shop",
          regular: "$25 per hole",
          premium: "Flat fix,mounting, sale",
          type: "tire-flat",
          position: {
            lat: 40.840893,
            lng: -73.860454,
          },
        },
        {
          address: "451 E Tremont Ave, Bronx, NY 10457",
          locateName: "Tremont Tire Shop",
          regular: "$20 per hole",
          premium: "Tire repair, wheel alignment",
          type: "tire-flat",
          position: {
            lat: 40.847296,
            lng: -73.896372,
          },
        },
      
      
      
      
        /**
         * 
         * 
         * 
         * 
         * Tire Shops in Manhattan
         * 
         * 
         * 
         * 
         * 
         * */
      
        {
          address: "120 W 125th St, New York, NY 10027",
          locateName: "Harlem Tire Shop",
          regular: "$25",
          premium: "Flat repair, Tire rotation",
          type: "tire-flat",
          position: {
            lat: 40.808235,
            lng: -73.945057,
          },
        },
        {
          address: "2342 8th Ave, New York, NY 10027",
          locateName: "8th Avenue Tire Repair",
          regular: "$20",
          premium: "Tire repair, Wheel alignmen",
          type: "tire-flat",
          position: {
            lat: 40.816896,
            lng: -73.946351,
          },
        },
        {
          address: "203 W 145th St, New York, NY 10039",
          locateName: "145th Street Tire Center",
          regular: "$30",
          premium: "New tires, Tire repair, Tire balancin",
          type: "tire-flat",
          position: {
            lat: 40.824934,
            lng: -73.938271,
          },
        },
        {
          address: "480 Malcolm X Blvd, New York, NY 10037",
          locateName: "Malcolm X Tire Services",
          regular: "$25",
          premium: "Flat repair, Tire rotation, Alignmen",
          type: "tire-flat",
          position: {
            lat: 40.814772,
            lng: -73.939724,
          },
        },
        {
          address: "605 W 151st St, New York, NY 10031",
          locateName: "151st Tire Repair Shop",
          regular: "$30",
          premium: "New tires, Tire `balancing, Rotatio",
          type: "tire-flat",
          position: {
            lat: 40.830676,
            lng: -73.949162,
          },
        },
        {
          address: "713 Amsterdam Ave, New York, NY 10025",
          locateName: "Amsterdam Tire Shop",
          regular: "$28",
          premium: "Flat repair, New tires, Balancin",
          type: "tire-flat",
          position: {
            lat: 40.796854,
            lng: -73.967263,
          },
        },
        {
          address: "3412 Broadway, New York, NY 10031",
          locateName: "Broadway Tire & Auto",
          regular: "$32",
          premium: "Tire repair, Wheel alignment",
          type: "tire-flat",
          position: {
            lat: 40.824962,
            lng: -73.952928,
          },
        },
        {
          address: "234 W 152nd St, New York, NY 10039",
          locateName: "152nd Street Tire Shop",
          regular: "$27",
          premium: "Flat repair, Tire rotation, Tire sale",
          type: "tire-flat",
          position: {
            lat: 40.828732,
            lng: -73.938508,
          },
        },
        {
          address: "921 St Nicholas Ave, New York, NY 10032",
          locateName: "St Nicholas Tire Repair",
          regular: "$26",
          premium: "New tires, Tire repair, Alignmen",
          type: "tire-flat",
          position: {
            lat: 40.838648,
            lng: -73.939064,
          },
        },
        {
          address: "763 W 181st St, New York, NY 10033",
          locateName: "181st Tire Center",
          regular: "$25",
          premium: "Flat repair, Wheel alignment, Balancin",
          type: "tire-flat",
          position: {
            lat: 40.849984,
            lng: -73.937155,
          },
        },
        {
          address: "210 W 145th St, New York, NY 10039",
          locateName: "145th & Broadway Tire",
          regular: "$29",
          premium: "Tire sales, Repair, Alignmen",
          type: "tire-flat",
          position: {
            lat: 40.823492,
            lng: -73.939874,
          },
        },
        {
          address: "451 W 125th St, New York, NY 10027",
          locateName: "West Side Tire Shop",
          regular: "$30",
          premium: "Flat repair, Tire rotation",
          type: "tire-flat",
          position: {
            lat: 40.811097,
            lng: -73.956858,
          },
        },
        {
          address: "605 Malcolm X Blvd, New York, NY 10037",
          locateName: "MLK Tire Center",
          regular: "$28",
          premium: "New tires, Tire `balancing, Repair",
          type: "tire-flat",
          position: {
            lat: 40.815315,
            lng: -73.941142,
          },
        },
        {
          address: "234 W 125th St, New York, NY 10027",
          locateName: "125th Street Tire Shop",
          regular: "$27",
          premium: "Flat repair, Tire sales, Rotation",
          type: "tire-flat",
          position: {
            lat: 40.811849,
            lng: -73.949085,
          },
        },
        {
          address: "890 Amsterdam Ave, New York, NY 10025",
          locateName: "Amsterdam Tire & Auto",
          regular: "$32",
          premium: "Flat repair, New tires, Balancing",
          type: "tire-flat",
          position: {
            lat: 40.800154,
            lng: -73.968542,
          },
        },
        {
          address: "531 W 125th St, New York, NY 10027",
          locateName: "Harlem Tire Service",
          regular: "$25",
          premium: "New tires, Flat repair, Tire rotation",
          type: "tire-flat",
          position: {
            lat: 40.813456,
            lng: -73.955322,
          },
        },
        {
          address: "234 W 134th St, New York, NY 10030",
          locateName: "134th Tire & Auto",
          regular: "$30",
          premium: "Tire repair, New tires, Alignment",
          type: "tire-flat",
          position: {
            lat: 40.815238,
            lng: -73.942361,
          },
        },
        {
          address: "654 W 125th St, New York, NY 10027",
          locateName: "Upper West Side Tire Shop",
          regular: "$28",
          premium: "Tire sales, Flat repair, Rotation",
          type: "tire-flat",
          position: {
            lat: 40.812871,
            lng: -73.950134,
          },
        },
        {
          address: "234 W 140th St, New York, NY 10030",
          locateName: "140th Tire & Auto Center",
          regular: "$27",
          premium: "Flat repair, Tire rotation, Balancing",
          type: "tire-flat",
          position: {
            lat: 40.820348,
            lng: -73.939215,
          },
        },
        {
          address: "890 St Nicholas Ave, New York, NY 10032",
          locateName: "St Nicholas Tire Shop",
          regular: "$25",
          premium: "New tires, Tire repair, Balancing",
          type: "tire-flat",
          position: {
            lat: 40.838941,
            lng: -73.937614,
          },
        },
        {
          address: "763 W 135th St, New York, NY 10031",
          locateName: "135th Street Tire Service",
          regular: "$26",
          premium: "Flat repair, Wheel alignment",
          type: "tire-flat",
          position: {
            lat: 40.816148,
            lng: -73.953197,
          },
        },
        {
          address: "2314 8th Ave, New York, NY 10027",
          locateName: "8th Avenue Tire & Auto",
          regular: "$30",
          premium: "Tire repair, New tires, Balancing",
          type: "tire-flat",
          position: {
            lat: 40.811739,
            lng: -73.947526,
          },
        },
        {
          address: "431 W 133rd St, New York, NY 10027",
          locateName: "133rd Street Tire Center",
          regular: "$28",
          premium: "Flat repair, Tire rotation, Alignment",
          type: "tire-flat",
          position: {
            lat: 40.817899,
            lng: -73.951128,
          },
        },
      
      
          /**
         * 
         * 
         * 
         * 
         * Tire Shops in MidTwon Manhattan
         * 
         * 
         * 
         * 
         * 
         * */
      
          {
            address: "527 W 35th St, New York, NY 10001",
            locateName: "35th Street Tire & Auto",
            regular: "$35",
            premium: "Flat repair, Tire rotation, New tires",
            type: "tire-flat",
            position: {
              lat: 40.755848,
              lng: -73.998573,
            },
          },
          {
            address: "600 W 42nd St, New York, NY 10036",
            locateName: "42nd Street Tire Shop",
            regular: "$40",
            premium: "Tire repair, Balancing, New tires",
                    type: "tire-flat",
            position: {
              lat: 40.760586,
              lng: -73.995442,
            },
          },
          {
            address: "789 10th Ave, New York, NY 10019",
            locateName: "10th Avenue Tire Center",
            regular: "$38",
            premium: "Flat repair, Tire rotation, Alignment",
                    type: "tire-flat",
            position: {
              lat: 40.768026,
              lng: -73.989572,
            },
          },
          {
            address: "345 W 44th St, New York, NY 10036",
            locateName: "44th Street Tire Services",
            regular: "$37",
            premium: "New tires, Tire `balancing, Repair",
                    type: "tire-flat",
            position: {
              lat: 40.759883,
              lng: -73.992838,
            },
          },
          {
            address: "567 8th Ave, New York, NY 10018",
            locateName: "8th Avenue Tire Shop",
            regular: "$39",
            premium: "Tire repair, New tires, Wheel alignment",
                    type: "tire-flat",
            position: {
              lat: 40.754152,
              lng: -73.992109,
            },
          },
          {
            address: "209 W 48th St, New York, NY 10036",
            locateName: "48th Street Tire Repair",
            regular: "$36",
            premium: "Flat repair, Tire rotation, Balancing",
                    type: "tire-flat",
            position: {
              lat: 40.759498,
              lng: -73.986248,
            },
          },
          {
            address: "423 W 55th St, New York, NY 10019",
            locateName: "55th Street Tire & Auto",
            regular: "$42",
            premium: "New tires, Flat repair, Tire rotation",
                    type: "tire-flat",
            position: {
              lat: 40.767216,
              lng: -73.987793,
            },
          },
          {
            address: "289 7th Ave, New York, NY 10001",
            locateName: "7th Avenue Tire Shop",
            regular: "$40",
            premium: "Tire repair, New tires, Wheel alignment",
                    type: "tire-flat",
            position: {
              lat: 40.747146,
              lng: -73.993192,
            },
          },
          {
            address: "789 11th Ave, New York, NY 10019",
            locateName: "11th Avenue Tire Center",
            regular: "$38",
            premium: "Flat repair, Tire rotation, Alignment",
                    type: "tire-flat",
            position: {
              lat: 40.771219,
              lng: -73.992202,
            },
          },
          {
            address: "255 W 37th St, New York, NY 10018",
            locateName: "37th Street Tire Shop",
            regular: "$39",
            premium: "Tire repair, Balancing, New tires",
                    type: "tire-flat",
            position: {
              lat: 40.753469,
              lng: -73.991513,
            },
          },
          {
            address: "601 W 47th St, New York, NY 10036",
            locateName: "47th Street Tire Center",
            regular: "$37",
            premium: "New tires, Tire repair, Balancing",
                    type: "tire-flat",
            position: {
              lat: 40.763296,
              lng: -73.996402,
            },
          },
          {
            address: "500 W 30th St, New York, NY 10001",
            locateName: "30th Street Tire Services",
            regular: "$41",
            premium: "Flat repair, Tire rotation, New tires",
                    type: "tire-flat",
            position: {
              lat: 40.752235,
              lng: -73.999091,
            },
          },
          {
            address: "456 W 33rd St, New York, NY 10001",
            locateName: "33rd Street Tire & Auto",
            regular: "$35",
            premium: "Tire repair, New tires, Wheel alignment",
                    type: "tire-flat",
            position: {
              lat: 40.753693,
              lng: -74.000263,
            },
          },
          {
            address: "678 9th Ave, New York, NY 10036",
            locateName: "9th Avenue Tire Shop",
            regular: "$39",
            premium: "Tire sales, Flat repair, Tire rotation",
                    type: "tire-flat",
            position: {
              lat: 40.761382,
              lng: -73.992816,
            },
          },
          {
            address: "145 W 28th St, New York, NY 10001",
            locateName: "28th Street Tire & Auto",
            regular: "$40",
            premium: "Flat repair, Tire rotation, Alignment",
                    type: "tire-flat",
            position: {
              lat: 40.746023,
              lng: -73.992009,
            },
          },
          {
            address: "503 W 49th St, New York, NY 10019",
            locateName: "49th Street Tire Services",
            regular: "$36",
            premium: "New tires, Tire `balancing, Repair",
                    type: "tire-flat",
            position: {
              lat: 40.765442,
              lng: -73.993269,
            },
          },
          {
            address: "456 W 52nd St, New York, NY 10019",
            locateName: "52nd Street Tire Shop",
            regular: "$37",
            premium: "Tire repair, New tires, Wheel alignment",
                    type: "tire-flat",
            position: {
              lat: 40.765917,
              lng: -73.992131,
            },
          },
          {
            address: "789 6th Ave, New York, NY 10001",
            locateName: "6th Avenue Tire Shop",
            regular: "$39",
            premium: "Flat repair, Tire rotation, New tires",
                    type: "tire-flat",
            position: {
              lat: 40.747308,
              lng: -73.990182,
            },
          },
          {
            address: "123 W 46th St, New York, NY 10036",
            locateName: "46th Street Tire Center",
            regular: "$40",
            premium: "New tires, Tire repair, Balancing",
                    type: "tire-flat",
            position: {
              lat: 40.758538,
              lng: -73.985439,
            },
          },
          {
            address: "678 8th Ave, New York, NY 10036",
            locateName: "8th Avenue Tire Services",
            regular: "$38",
            premium: "Tire repair, New tires, Wheel alignment",
                    type: "tire-flat",
            position: {
              lat: 40.757982,
              lng: -73.991319,
            },
          },
          {
            address: "123 W 55th St, New York, NY 10019",
            locateName: "55th Street Tire Shop",
            regular: "$42",
            premium: "Flat repair, Tire rotation, New tires",
                    type: "tire-flat",
            position: {
              lat: 40.763376,
              lng: -73.977571,
            },
          },
          {
            address: "567 W 48th St, New York, NY 10036",
            locateName: "48th Street Tire Center",
            regular: "$39",
            premium: "New tires, Tire `balancing, Repair",
                    type: "tire-flat",
            position: {
              lat: 40.764492,
              lng: -73.993154,
            },
          },
          {
            address: "890 10th Ave, New York, NY 10019",
            locateName: "10th Avenue Tire Shop",
            regular: "$38",
            premium: "Tire repair, New tires, Wheel alignment",
                    type: "tire-flat",
            position: {
              lat: 40.767318,
              lng: -73.990448,
            },
          },
      
      
          /**
         * 
         * 
         * 
         * 
         * Tire Shops in DownTown Manhttan
         * 
         * 
         * 
         * 
         * 
         * */
          {
            address: "123 Lafayette St, New York, NY 10013",
            locateName: "Lafayette Street Tire Shop",
            regular: "$45",
            premium: "Flat repair, Tire rotation, New tires",
                    type: "tire-flat",
            position: {
              lat: 40.717108,
              lng: -73.999607,
            },
          },
          {
            address: "145 Bowery, New York, NY 10002",
            locateName: "Bowery Tire Services",
            regular: "$50",
            premium: "Tire repair, Balancing, New tires",
                    type: "tire-flat",
            position: {
              lat: 40.720853,
              lng: -73.995621,
            },
          },
          {
            address: "234 Canal St, New York, NY 10013",
            locateName: "Canal Street Tire Center",
            regular: "$47",
            premium: "Flat repair, Tire rotation, Alignment",
                    type: "tire-flat",
            position: {
              lat: 40.719519,
              lng: -73.999215,
            },
          },
          {
            address: "789 Greenwich St, New York, NY 10014",
            locateName: "Greenwich Street Tire Shop",
            regular: "$48",
            premium: "New tires, Tire `balancing, Repair",
                    type: "tire-flat",
            position: {
              lat: 40.735071,
              lng: -74.004973,
            },
          },
          {
            address: "567 W 14th St, New York, NY 10014",
            locateName: "14th Street Tire Services",
            regular: "$52",
            premium: "Tire repair, New tires, Wheel alignment",
                    type: "tire-flat",
            position: {
              lat: 40.740119,
              lng: -74.007907,
            },
          },
          {
            address: "345 W Broadway, New York, NY 10013",
            locateName: "Broadway Tire Shop",
            regular: "$49",
            premium: "Flat repair, Tire rotation, Balancing",
                    type: "tire-flat",
            position: {
              lat: 40.722444,
              lng: -74.002193,
            },
          },
          {
            address: "432 6th Ave, New York, NY 10011",
            locateName: "6th Avenue Tire Center",
            regular: "$50",
            premium: "New tires, Flat repair, Tire rotation",
                    type: "tire-flat",
            position: {
              lat: 40.731972,
              lng: -74.000746,
            },
          },
          {
            address: "289 Hudson St, New York, NY 10013",
            locateName: "Hudson Street Tire Shop",
            regular: "$48",
            premium: "Tire repair, New tires, Wheel alignment",
                    type: "tire-flat",
            position: {
              lat: 40.725098,
              lng: -74.007004,
            },
          },
          {
            address: "100 Varick St, New York, NY 10013",
            locateName: "Varick Street Tire Services",
            regular: "$47",
            premium: "Flat repair, Tire rotation, Alignment",
                    type: "tire-flat",
            position: {
              lat: 40.727574,
              lng: -74.005387,
            },
          },
          {
            address: "567 Broadway, New York, NY 10012",
            locateName: "Broadway Tire & Auto",
            regular: "$49",
            premium: "Tire repair, Balancing, New tires",
                    type: "tire-flat",
            position: {
              lat: 40.726823,
              lng: -73.997376,
            },
          },
          {
            address: "543 W Houston St, New York, NY 10014",
            locateName: "Houston Street Tire Center",
            regular: "$51",
            premium: "New tires, Tire repair, Balancing",
                    type: "tire-flat",
            position: {
              lat: 40.729647,
              lng: -74.007299,
            },
          },
          {
            address: "678 7th Ave, New York, NY 10019",
            locateName: "7th Avenue Tire Services",
            regular: "$50",
            premium: "Flat repair, Tire rotation, New tires",
                    type: "tire-flat",
            position: {
              lat: 40.760723,
              lng: -73.983951,
            },
          },
          {
            address: "501 Canal St, New York, NY 10013",
            locateName: "Canal Tire Shop",
            regular: "$52",
            premium: "Tire repair, New tires, Balancing",
                    type: "tire-flat",
            position: {
              lat: 40.722999,
              lng: -74.006795,
            },
          },
          {
            address: "78 Delancey St, New York, NY 10002",
            locateName: "Delancey Street Tire Center",
            regular: "$50",
            premium: "New tires, Tire `balancing, Repair",
                    type: "tire-flat",
            position: {
              lat: 40.719161,
              lng: -73.988434,
            },
          },
          {
            address: "234 W 4th St, New York, NY 10014",
            locateName: "4th Street Tire Shop",
            regular: "$49",
            premium: "Flat repair, Tire rotation, Alignment",
                    type: "tire-flat",
            position: {
              lat: 40.734779,
              lng: -74.003098,
            },
          },
          {
            address: "120 Broadway, New York, NY 10271",
            locateName: "Broadway Tire & Auto",
            regular: "$50",
            premium: "New tires, Flat repair, Tire rotation",
                    type: "tire-flat",
            position: {
              lat: 40.708092,
              lng: -74.011868,
            },
          },
          {
            address: "765 Washington St, New York, NY 10014",
            locateName: "Washington Street Tire Center",
            regular: "$51",
            premium: "Tire repair, New tires, Wheel alignment",
                    type: "tire-flat",
            position: {
              lat: 40.736671,
              lng: -74.007101,
            },
          },
          {
            address: "456 5th Ave, New York, NY 10018",
            locateName: "5th Avenue Tire Shop",
            regular: "$50",
            premium: "Flat repair, Tire rotation, Balancing",
                    type: "tire-flat",
            position: {
              lat: 40.752548,
              lng: -73.983751,
            },
          },
          {
            address: "123 8th Ave, New York, NY 10011",
            locateName: "8th Avenue Tire Center",
            regular: "$52",
            premium: "New tires, Tire repair, Balancing",
                    type: "tire-flat",
            position: {
              lat: 40.741919,
              lng: -74.002576,
            },
          },
          {
            address: "333 W Broadway, New York, NY 10013",
            locateName: "West Broadway Tire Shop",
            regular: "$49",
            premium: "Tire sales, Flat repair, Tire rotation",
              type: "tire-flat",
            position: {
              lat: 40.723958,
              lng: -74.002157,
            },
          },
          {
            address: "445 E Houston St, New York, NY 10002",
            locateName: "East Houston Tire Shop",
            regular: "$50",
            premium: "Flat repair, Tire rotation, New tires",
                    type: "tire-flat",
            position: {
              lat: 40.719178,
              lng: -73.982492,
            },
          },
          {
            address: "890 Washington St, New York, NY 10014",
            locateName: "Washington Street Tire Services",
            regular: "$51",
            premium: "New tires, Tire `balancing, Repair",
                    type: "tire-flat",
            position: {
              lat: 40.740769,
              lng: -74.007101,
            },
          },
          {
            address: "123 Chrystie St, New York, NY 10002",
            locateName: "Chrystie Street Tire Center",
            regular: "$52",
            premium: "Tire repair, New tires, Wheel alignment",
                    type: "tire-flat",
            position: {
              lat: 40.720888,
              lng: -73.993852,
            },
          },
      
          /**
         * 
         * 
         * 
         * 
         * Tire Shops in Staten Island
         * 
         * 
         * 
         * 
         * 
         * */




    /**
             * 
             * 
             * 
             * 
             * Mechanic Shops in the Bronx
             * 
             * 
             * */

            {
                address: "123 Main St, Bronx, NY",
                locateName: "Bronx Auto Repair",
                regular: "Oil Change, Brake Repair",
                premium: "Engine Repair, Transmission Service",
                type: "car-wrench",
                position: {
                    lat: 40.8448,
                    lng: -73.8648
                },
            },
            {
                address: "456 Fordham Rd, Bronx, NY",
                locateName: "Fordham Auto Center",
                regular: "Tire Rotation, Battery Replacement",
                premium: "Suspension Service, Wheel Alignment",
                type: "car-wrench",
                position: {
                    lat: 40.8600,
                    lng: -73.8881
                },
            },
            {
                address: "789 Grand Concourse, Bronx, NY",
                locateName: "Concourse Mechanics",
                regular: "Brake Repair, Oil Change",
                premium: "Transmission Service, Engine Repair",
                type: "car-wrench",
                position: {
                    lat: 40.8265,
                    lng: -73.9229
                },
            },
            // ... (add more mechanic shops here)
            {
                address: "1234 Jerome Ave, Bronx, NY",
                locateName: "Jerome Auto Services",
                regular: "Battery Replacement, Tire Rotation",
                premium: "Wheel Alignment, Suspension Service",
                type: "car-wrench",
                position: {
                    lat: 40.8574,
                    lng: -73.9041
                },
            },
            {
                address: "5678 Morris Park Ave, Bronx, NY",
                locateName: "Morris Park Auto Repair",
                regular: "Oil Change, Brake Repair",
                premium: "Engine Repair, Transmission Service",
                type: "car-wrench",
                position: {
                    lat: 40.8489,
                    lng: -73.8523
                },
            },
            {
                address: "2345 East Tremont Ave, Bronx, NY",
                locateName: "East Tremont Auto Shop",
                regular: "Tire Rotation, Battery Replacement",
                premium: "Suspension Service, Wheel Alignment",
                type: "car-wrench",
                position: {
                    lat: 40.8417,
                    lng: -73.8732
                },
            },
            {
                address: "6789 Webster Ave, Bronx, NY",
                locateName: "Webster Auto Repair",
                regular: "Brake Repair, Oil Change",
                premium: "Transmission Service, Engine Repair",
                type: "car-wrench",
                position: {
                    lat: 40.8619,
                    lng: -73.8873
                },
            },
            {
                address: "1357 Bronx Blvd, Bronx, NY",
                locateName: "Bronx Blvd Mechanics",
                regular: "Battery Replacement, Tire Rotation",
                premium: "Wheel Alignment, Suspension Service",
                type: "car-wrench",
                position: {
                    lat: 40.8803,
                    lng: -73.8716
                },
            },
            {
                address: "2468 Kingsbridge Rd, Bronx, NY",
                locateName: "Kingsbridge Auto Services",
                regular: "Oil Change, Brake Repair",
                premium: "Engine Repair, Transmission Service",
                type: "car-wrench",
                position: {
                    lat: 40.8807,
                    lng: -73.8993
                },
            },
            {
                address: "3690 Westchester Ave, Bronx, NY",
                locateName: "Westchester Auto Repair",
                regular: "Tire Rotation, Battery Replacement",
                premium: "Suspension Service, Wheel Alignment",
                type: "car-wrench",
                position: {
                    lat: 40.8432,
                    lng: -73.8275
                },
            },
            {
                address: "1122 Pelham Pkwy, Bronx, NY",
                locateName: "Pelham Auto Center",
                regular: "Brake Repair, Oil Change",
                premium: "Transmission Service, Engine Repair",
                type: "car-wrench",
                position: {
                    lat: 40.8571,
                    lng: -73.8653
                },
            },
            {
                address: "1346 Bruckner Blvd, Bronx, NY",
                locateName: "Bruckner Auto Repair",
                regular: "Battery Replacement, Tire Rotation",
                premium: "Wheel Alignment, Suspension Service",
                type: "car-wrench",
                position: {
                    lat: 40.8196,
                    lng: -73.8697
                },
            },
            {
                address: "1578 Soundview Ave, Bronx, NY",
                locateName: "Soundview Auto Services",
                regular: "Oil Change, Brake Repair",
                premium: "Engine Repair, Transmission Service",
                type: "car-wrench",
                position: {
                    lat: 40.8218,
                    lng: -73.8549
                },
            },
            {
                address: "1790 White Plains Rd, Bronx, NY",
                locateName: "White Plains Auto Repair",
                regular: "Tire Rotation, Battery Replacement",
                premium: "Suspension Service, Wheel Alignment",
                type: "car-wrench",
                position: {
                    lat: 40.8385,
                    lng: -73.8605
                },
            },
            {
                address: "1902 Castle Hill Ave, Bronx, NY",
                locateName: "Castle Hill Auto Services",
                regular: "Brake Repair, Oil Change",
                premium: "Transmission Service, Engine Repair",
                type: "car-wrench",
                position: {
                    lat: 40.8284,
                    lng: -73.8512
                },
            },
            {
                address: "2104 Boston Rd, Bronx, NY",
                locateName: "Boston Auto Repair",
                regular: "Battery Replacement, Tire Rotation",
                premium: "Wheel Alignment, Suspension Service",
                type: "car-wrench",
                position: {
                    lat: 40.8505,
                    lng: -73.8690
                },
            },
            {
                address: "2256 Southern Blvd, Bronx, NY",
                locateName: "Southern Auto Services",
                regular: "Oil Change, Brake Repair",
                premium: "Engine Repair, Transmission Service",
                type: "car-wrench",
                position: {
                    lat: 40.8413,
                    lng: -73.8884
                },
            },
            {
                address: "2398 Jerome Ave, Bronx, NY",
                locateName: "Jerome Mechanics",
                regular: "Tire Rotation, Battery Replacement",
                premium: "Suspension Service, Wheel Alignment",
                type: "car-wrench",
                position: {
                    lat: 40.8614,
                    lng: -73.9027
                },
            },
            {
                address: "2510 Prospect Ave, Bronx, NY",
                locateName: "Prospect Auto Repair",
                regular: "Brake Repair, Oil Change",
                premium: "Transmission Service, Engine Repair",
                type: "car-wrench",
                position: {
                    lat: 40.8473,
                    lng: -73.8902
                },
            },
            {
                address: "2678 E 233rd St, Bronx, NY",
                locateName: "233rd St Auto Services",
                regular: "Battery Replacement, Tire Rotation",
                premium: "Wheel Alignment, Suspension Service",
                type: "car-wrench",
                position: {
                    lat: 40.8938,
                    lng: -73.8577
                },
            },
            {
                address: "2789 Bainbridge Ave, Bronx, NY",
                locateName: "Bainbridge Auto Repair",
                regular: "Oil Change, Brake Repair",
                premium: "Engine Repair, Transmission Service",
                type: "car-wrench",
                position: {
                    lat: 40.8746,
                    lng: -73.8793
                },
            },
            {
                address: "2901 Webster Ave, Bronx, NY",
                locateName: "Webster Mechanics",
                regular: "Tire Rotation, Battery Replacement",
                premium: "Suspension Service, Wheel Alignment",
                type: "car-wrench",
                position: {
                    lat: 40.8621,
                    lng: -73.8912
                },
            },
            {
                address: "3102 Jerome Ave, Bronx, NY",
                locateName: "Jerome Auto Center",
                regular: "Brake Repair, Oil Change",
                premium: "Transmission Service, Engine Repair",
                type: "car-wrench",
                position: {
                    lat: 40.8783,
                    lng: -73.8957
                },
            },
            {
                address: "3256 Eastchester Rd, Bronx, NY",
                locateName: "Eastchester Auto Repair",
                regular: "Battery Replacement, Tire Rotation",
                premium: "Wheel Alignment, Suspension Service",
                type: "car-wrench",
                position: {
                    lat: 40.8825,
                    lng: -73.8445
                },
            },

        
        
        
   ];
  
  initMap();