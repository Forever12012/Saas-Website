export const CompNames = () => (
  <section className="relative py-8 bg-indigo-600">
    <div className="container relative">
      <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
        <div className="mx-auto py-4">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/client/amazon.svg`}
            alt="Amazon"
            className="h-6"
          />
        </div>
        <div className="mx-auto py-4">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/client/google.svg`}
            alt="Google"
            className="h-6"
          />
        </div>
        <div className="mx-auto py-4">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/client/lenovo.svg`}
            className="h-6"
            alt=""
          />
        </div>
        <div className="mx-auto py-4">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/client/paypal.svg`}
            className="h-6"
            alt=""
          />
        </div>
        <div className="mx-auto py-4">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/client/shopify.svg`}
            className="h-6"
            alt=""
          />
        </div>
        <div className="mx-auto py-4">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/client/spotify.svg`}
            className="h-6"
            alt=""
          />
        </div>
      </div>
      {/*end grid*/}
    </div>
    {/*end container*/}
  </section>
);
