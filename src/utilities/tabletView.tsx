export default function tabletView() {
  if (window.matchMedia("(max-width: 992px)").matches) {
    return true;
  } else {
    return false;
  }
}
