export const EmailResetPassword = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <title>
        Techwind - Tailwind CSS Saas &amp; Software Landing Page Template
      </title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta
        content="Tailwind CSS Saas & Software Landing Page Template"
        name="description"
      />
      <meta name="author" content="Shreethemes" />
      <meta name="website" content="https://shreethemes.in/" />
      <meta name="email" content="support@shreethemes.in" />
      <meta name="version" content="1.0.0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      {/* favicon */}
      <link rel="shortcut icon" href="assets/images/favicon.ico" />
      {/* Font */}
      <link
        href="https://fonts.googleapis.com/css?family=Nunito:400,600,700&display=swap"
        rel="stylesheet"
      />

      <div style={{ marginTop: 50 }}>
        <table
          cellPadding={0}
          cellSpacing={0}
          style={{
            fontFamily: "Nunito, sans-serif",
            fontSize: 15,
            fontWeight: 400,
            maxWidth: 600,
            border: "none",
            margin: "0 auto",
            borderRadius: 6,
            overflow: "hidden",
            backgroundColor: "#fff",
            boxShadow: "0 0 3px rgba(60, 72, 88, 0.15)",
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "#4f46e5",
                padding: "3px 0",
                lineHeight: 68,
                textAlign: "center",
                color: "#fff",
                fontSize: 24,
                fontWeight: 700,
                letterSpacing: 1,
              }}
            >
              <th scope="col">
                <img src="assets/images/logo-light.png" alt="" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                style={{
                  padding: "48px 24px 0",
                  color: "#161c2d",
                  fontSize: 18,
                  fontWeight: 600,
                }}
              >
                Hello, Harry
              </td>
            </tr>
            <tr>
              <td style={{ padding: "15px 24px 15px", color: "#8492a6" }}>
                To reset your password, please click the button below :
              </td>
            </tr>
            <tr>
              <td style={{ padding: "15px 24px" }}>
                <a
                  href="#"
                  style={{
                    padding: "8px 20px",
                    outline: "none",
                    textDecoration: "none",
                    fontSize: 16,
                    letterSpacing: "0.5px",
                    transition: "all 0.3s",
                    fontWeight: 600,
                    borderRadius: 6,
                    backgroundColor: "#4f46e5",
                    border: "1px solid #4f46e5",
                    color: "#ffffff",
                  }}
                >
                  Reset Password
                </a>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "15px 24px 0", color: "#8492a6" }}>
                This link will be active for 45 second from the time this email
                was sent. If you did not request to reset your password, please
                ignore this email and your account will not be affected.
              </td>
            </tr>
            <tr>
              <td style={{ padding: "15px 24px 15px", color: "#8492a6" }}>
                Techwind <br /> Support Team
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "16px 8px",
                  color: "#8492a6",
                  backgroundColor: "#f8f9fc",
                  textAlign: "center",
                }}
              >
                © Techwind.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
