export async function POST() {
  await new Promise((resolve) => setTimeout(resolve, 0))

  const isValid = Math.random() < 0.5

  const errorCodes: { code: string; shouldShowCredential: boolean }[] = [
    {
      code: 'INVALID_SIGNATURE',
      shouldShowCredential: false
    },
    {
      code: 'EXPIRED_CREDENTIAL',
      shouldShowCredential: true
    },
    {
      code: 'REVOKED_CREDENTIAL',
      shouldShowCredential: true
    },
    {
      code: 'SUSPENDED_CREDENTIAL',
      shouldShowCredential: true
    },
    {
      code: 'NOT_VALID_YET',
      shouldShowCredential: true
    },
    {
      code: 'ORGANIZATION_CANT_BE_VERIFIED',
      shouldShowCredential: true
    },
    {
      code: 'SERVICE_UNAVAILABLE',
      shouldShowCredential: false
    }
  ]

  const randomColors = ['#00C785', '#0079C7', '#C76A00']

  const randomColor =
    randomColors[Math.floor(Math.random() * randomColors.length)]

  if (isValid) {
    return Response.json({
      credential: {
        issuedTo: 'John Doe',
        type: "Bachelor's Degree",
        name: 'HBO Bouwkunde - Civil Engineering',
        issuer: {
          name: 'EVC Nederland',
          colors: {
            primary: randomColor
          }
        },
        issuanceDate: new Date(),
        expiryDate: new Date(
          new Date().setFullYear(new Date().getFullYear() + 1)
        ),
        verifier: {
          verifiedAt: new Date(),
          name: 'Examenkamer',
          url: 'https://example.com/verifier-xyz',
          logoUrl:
            'https://www.examenkamer.nl/inhoud/uploads/Logo-full-color.svg'
        }
      },
      checks: [
        {
          name: 'Credential Validation',
          status: 'passed'
        },
        {
          name: 'Credential Status',
          status: 'passed'
        },
        {
          name: 'Trust relation',
          status: 'passed'
        },
        {
          name: 'Issuer Domain Linkage',
          status: 'passed'
        }
      ]
    })
  }

  const randomReason = errorCodes[Math.floor(Math.random() * errorCodes.length)]

  return Response.json({
    verifier: null,
    credential: randomReason.shouldShowCredential
      ? {
          issuedTo: 'John Doe',
          type: "Bachelor's Degree",
          name: 'HBO Bouwkunde - Civil Engineering',
          issuer: {
            name: 'Amsterdam University of Applied Sciences',
            logoUrl:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm8RwvnbGaiWMpSJM7V5hPeftqJ4jj8_oiTw&s',
            colors: {
              primary: randomColor
            }
          },
          issuanceDate: new Date(),
          expiryDate: new Date(
            new Date().setFullYear(new Date().getFullYear() + 1)
          ),
          verifier: {
            verifiedAt: new Date(),
            name: 'Examenkamer',
            url: 'https://example.com/verifier-xyz',
            logoUrl:
              'https://www.examenkamer.nl/inhoud/uploads/Logo-full-color.svg'
          }
        }
      : null,
    checks: [
      {
        name: 'Credential Validation',
        status: randomReason.shouldShowCredential ? 'passed' : 'failed',
        error: randomReason.code
      },
      {
        name: 'Credential Status',
        status: 'failed',
        error: randomReason.code
      },
      {
        name: 'Trust relation',
        status: 'failed',
        error: randomReason.code
      },
      {
        name: 'Issuer Domain Linkage',
        status: 'failed',
        error: randomReason.code
      }
    ]
  })
}
