import { Head} from "./Style"
const Home = () => {
    return (
      <div>
      <video
            autoPlay
            loop
            muted
            style={{
              width: "100%",
              left: "50%",
              top: "50%",
              height: "100%",
              objectFit: "cover",
             
             
            }}
          >

<source src= "https://media.istockphoto.com/videos/cinnamon-sprinkled-onto-vanilla-cupcakes-video-id801637434" type="video/mp4"/>
      </video>
     
      </div>
    );
  };
  
  export default Home;