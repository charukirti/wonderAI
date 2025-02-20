export default function Footer() {
  return (
    <footer className="mt-10 w-full  py-3">
      <p className="text-center">
        &copy;{new Date().getFullYear()} {' '}
        <a href="https://github.com/charukirti" target="blank_">
          WonderAI
        </a>
      </p>
    </footer>
  );
}
