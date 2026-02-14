export function setLocation(pathname: string) {
  let active: {
    home: boolean;
    explore: boolean;
    notification: boolean;
    composepost: boolean;
    settings: boolean;
  } = {
    home: false,
    explore: false,
    notification: false,
    composepost: false,
    settings: false,
  };
  if (pathname == "/") {
    active = {
      home: true,
      explore: false,
      notification: false,
      composepost: false,
      settings: false,
    };
  }
  if (pathname == "/compose/post") {
    active = {
      home: false,
      explore: false,
      notification: false,
      composepost: true,
      settings: false,
    };
  }
  if (pathname == "/explore") {
    active = {
      home: false,
      explore: true,
      notification: false,
      composepost: false,
      settings: false,
    };
  }
  return active;
}
