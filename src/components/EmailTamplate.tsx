import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
export interface ContactFormProps {
  name: string;
  Date: Date;
  email: string;
  phone: string;
  services: string;
  address: string;
  message: string;
}

export const EmailTemplate = ({
  name,
  Date,
  email,
  phone,
  message,
  services,
  address,
}: ContactFormProps) => {
  const formattedDate = new Intl.DateTimeFormat("en", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(Date);

  return (
    <Html>
      <Head />
      <Preview>Contact Form</Preview>
      <Body style={main}>
        <Container>
          <Section></Section>

          <Section style={content}>
            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Hi Wahab,
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Mr. {name} Contact Your For {services}
                </Heading>

                <Text style={paragraph}>
                  <b>Time: </b>
                  {formattedDate}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Phone No: </b>
                  {phone}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Email Address: </b>
                  {email}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Location: </b>
                  {address}
                </Text>

                <Text
                  style={{
                    color: "#2e2e2e",
                    fontSize: 14,
                    marginTop: -5,
                  }}
                >
                  <b>Message: </b>
                  {message}
                </Text>

                <Text style={paragraph}>
                  You Can Contact Him on the Given Email Address or Phone Number
                </Text>
              </Column>
            </Row>
          </Section>

          <Section style={containerImageFooter}>
            <Img
              style={image}
              width={620}
              src={`https://react-email-demo-q2iyfgd67-resend.vercel.app/static/yelp-footer.png`}
            />
          </Section>

          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            © 2024 | RWahab Mover UAE., Building No.12 Street No.4 Al Yarmook,
            Sharjah, UAE | www.rwahabmoversuae.com
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  maxWidth: "100%",
};

const boxInfos = {
  padding: "20px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};
