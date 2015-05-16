# Read more about app structure at http://docs.appgyver.com

module.exports =

  # See styling options for tabs and other native components in app/common/native-styles/ios.css or app/common/native-styles/android.css
  tabs: [
    {
      title: "Index"
      id: "index"
      location: "example#getting-started" # Supersonic module#view type navigation
    }
    {
    title: "Geolocation"
    id: "geolocation"
    location: "geolocation#index"
     }
    {
      title: "Internet"
      id: "internet"
      location: "http://google.com" # URLs are supported!
    }
    {
     tiltle: "CRUD"
     id:"CRUD"
     location: "brewery#index"
    }
    {
    title: "googlemaps"
    id: "googlemaps"
    location: "googlemaps#index"
    }
  ]

   #rootView:
    # location: "brewery#index"

  preloads: [
    {
      id: "learn-more"
      location: "example#learn-more"
    }
    {
      id: "using-the-scanner"
      location: "example#using-the-scanner"
    }
  ]

