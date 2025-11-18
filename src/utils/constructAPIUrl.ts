const constructAPIUrl = (path: string): string => {
    const currentUrlWithUnitrustStripped = new URL(window.location.href.replace(
      '-unitrust',
      ''
    ))

  return `${currentUrlWithUnitrustStripped.origin}${path}`;
}

export default constructAPIUrl;