import { useParams } from "react-router-dom";

export const EmailConfirmation = () => {
  const { name } = useParams();
  return (
    <>
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
          <thead></thead>
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
                Hello, {name}
              </td>
            </tr>
            <tr>
              <td style={{ padding: "15px 24px 15px", color: "#8492a6" }}>
                Thanks for creating a Techwind account. To continue, please
                confirm your email address by clicking the button below:
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
                  Confirm Email Address
                </a>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "15px 24px 0", color: "#8492a6" }}>
                This link will be active for 30 minutes from the time this email
                was sent.
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
