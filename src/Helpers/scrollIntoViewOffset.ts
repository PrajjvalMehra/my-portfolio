export default function scrollIntoViewOffset(ref: any, offset: number) {
  window.scrollTo({
    behavior: "smooth",
    top:
      document.querySelector(ref).getBoundingClientRect().top -
      document.body.getBoundingClientRect().top -
      offset,
  });
}
