export async function POST() {
  await new Promise((resolve) => setTimeout(resolve, 0))

  const isValid = Math.random() < 0.5

  const errorCodes: { code: string; shouldShowCredential: boolean }[] = [
    {
      code: 'Signature is invalid',
      shouldShowCredential: false
    },
    {
      code: 'Credential has expired',
      shouldShowCredential: true
    },
    {
      code: 'Credential has been revoked',
      shouldShowCredential: true
    },
    {
      code: 'Credential has been suspended',
      shouldShowCredential: true
    },
    {
      code: 'Credential is not valid yet',
      shouldShowCredential: true
    },
    {
      code: 'Organization cannot be verified',
      shouldShowCredential: true
    },
    {
      code: 'Service is unavailable',
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
        description: `A bachelor in Bouwkunde (Architecture / Building Engineering) combines creativity and technical expertise to design and realize the built environment. Students learn to translate spatial and structural concepts into functional, sustainable, and aesthetically pleasing designs. 
        
        The program covers architecture, construction technology, materials, and urban planning, preparing graduates to collaborate with engineers, designers, and contractors on projects that shape the cities of tomorrow.`,
        issuer: {
          name: 'EVC Nederland',
          url: 'https://evc-nederland.nl/',
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
          name: 'Credential Authentication',
          status: 'passed'
        },
        {
          name: 'Credential Status',
          status: 'passed'
        },
        {
          name: 'Ecosystem Connection',
          status: 'passed'
        },
        {
          name: 'Issuer Domain',
          status: 'passed'
        },
        {
          name: 'Profile Check',
          status: 'passed'
        }
      ]
    })
  }

  const randomReason = errorCodes[Math.floor(Math.random() * errorCodes.length)]

  return Response.json({
    checks: [
      {
        name: 'Credential Authentication',
        status: randomReason.shouldShowCredential ? 'passed' : 'failed',
        error: randomReason.shouldShowCredential ? undefined : randomReason.code
      },
      {
        name: 'Credential Status',
        status: 'failed',
        error: randomReason.code
      },
      {
        name: 'Ecosystem Connection',
        status: 'failed',
        error: randomReason.code
      },
      {
        name: 'Issuer Domain',
        status: 'failed',
        error: randomReason.code
      },
      {
        name: 'Profile Check',
        status: 'failed',
        error: randomReason.code
      }
    ]
  })
}
