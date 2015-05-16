# Read more about app structure at http://docs.appgyver.com

module.exports =

  # See styling options for tabs and other native components in app/common/native-styles/ios.css or app/common/native-styles/android.css
 

  
   rootView:
     location: "brewery#index"

  tabs: [
  {
    title: "Index"
    id: "index"
    location: "example#getting-started"
  }
  {
    title: "Geolocation"
    id: "geolocation"`
    location: "geolocation#index"
  }
  {
    title: "Internet"
    id: "internet"
    location: "http://google.com"
  }
        ]



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



  # drawers:
  #   left:
  #     id: "leftDrawer"
  #     location: "example#drawer"
  #     showOnAppLoad: false
  #   options:
  #     animation: "swingingDoor"
  #
  # initialView:
  #   id: "initialView"
  #   location: "example#initial-view"
