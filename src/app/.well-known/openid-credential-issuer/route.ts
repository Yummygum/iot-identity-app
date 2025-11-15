export const dynamic = 'force-static'

const exampleCredentialIssuer = {
  credential_issuer: 'http://localhost:3034/',
  credential_endpoint: 'http://localhost:3034/openid4vci/credential',
  display: [
    {
      name: 'ExamenKamer',
      locale: 'en',
      logo: {
        uri: 'https://storage.googleapis.com/public-logo-assets-f9d25b6/examenkamer.png',
        alt_text: 'ExamenKamer Logo'
      }
    }
  ],
  credential_configurations_supported: {
    '002': {
      format: 'jwt_vc_json',
      credential_definition: {
        type: ['VerifiableCredential', 'OpenBadgeCredential']
      },
      cryptographic_binding_methods_supported: ['did:web'],
      credential_signing_alg_values_supported: ['ES256'],
      proof_types_supported: {
        jwt: {
          proof_signing_alg_values_supported: ['ES256']
        }
      },
      display: [
        {
          name: 'HBO Bouwkunde - Civil Engineering',
          locale: 'en',
          logo: {
            uri: 'https://storage.googleapis.com/public-logo-assets-f9d25b6/evc-nederland.png',
            alt_text: 'EVC Nederland Logo'
          }
        }
      ]
    },
    '001': {
      format: 'jwt_vc_json',
      credential_definition: {
        type: ['VerifiableCredential']
      },
      cryptographic_binding_methods_supported: ['did:web'],
      credential_signing_alg_values_supported: ['ES256'],
      proof_types_supported: {
        jwt: {
          proof_signing_alg_values_supported: ['ES256']
        }
      },
      display: [
        {
          name: 'Verifiable Credential',
          locale: 'en',
          logo: {
            uri: 'https://www.impierce.com/external/impierce-logo.png',
            alt_text: 'Impierce Logo'
          }
        }
      ],
      claims: [
        {
          path: ['credentialSubject', 'first_name'],
          mandatory: false,
          display: [
            {
              name: 'First Name',
              locale: 'en'
            }
          ]
        },
        {
          path: ['credentialSubject', 'last_name'],
          mandatory: false,
          display: [
            {
              name: 'Last Name',
              locale: 'en'
            }
          ]
        },
        {
          path: ['credentialSubject', 'dob'],
          mandatory: false,
          display: [
            {
              name: 'Date of Birth',
              locale: 'en'
            }
          ]
        }
      ]
    }
  }
}

export async function GET() {
  return Response.json(exampleCredentialIssuer)
}
