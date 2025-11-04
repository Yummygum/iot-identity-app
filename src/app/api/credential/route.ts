export async function POST() {
  await new Promise((resolve) => setTimeout(resolve, 0))

  const randomColors = ['#00C785', '#0079C7', '#C76A00']

  const randomColor =
    randomColors[Math.floor(Math.random() * randomColors.length)]

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
        logoUrl: 'https://www.examenkamer.nl/inhoud/uploads/Logo-full-color.svg'
      }
    }
  })
}
