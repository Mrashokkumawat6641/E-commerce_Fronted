import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Banner from '/assets/Subscribe/AdobeStock_28.jpg';

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  const [isSigningUp, setIsSigningUp] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const handleSignUp = () => {
    setIsSigningUp(true);
    setTimeout(() => {
      setIsSigningUp(false);
      navigate('/registeruser'); 
    }, 2000); 
  };

  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-orange-300 dark:bg-gray-800 text-white"
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Enter Your Email"
            className="w-full p-3 text-black"
            required
          />
          <button
            type="submit"
            className="btn btn-primary w-full "
            data-aos="fade-up"
            onClick={handleSignUp}
            disabled={isSigningUp}
          >
            {isSigningUp ? (
              <>

                <Loader2 className="size-5 animate-spin"
                // data-aos="fade-up"
                />
                Loading...
              </>
            ) : (
              "signup"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
