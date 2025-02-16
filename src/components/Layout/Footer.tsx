export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-white py-3">
      <p className="text-center">
        &copy;{new Date().getFullYear()} {' '}
        <a href="https://github.com/charukirti" target="blank_">
          WonderAI
        </a>
      </p>
    </footer>
  );
}
