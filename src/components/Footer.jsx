export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-8 py-12 mt-16">
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div>
          <h5 className="font-bold text-white">About</h5>
          <ul className="mt-3 space-y-2">
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-white">For Job Seekers</h5>
          <ul className="mt-3 space-y-2">
            <li><a href="#">Browse Jobs</a></li>
            <li><a href="#">Remote Work Tips</a></li>
            <li><a href="#">Success Stories</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-white">Employers</h5>
          <ul className="mt-3 space-y-2">
            <li><a href="#">Post a Job</a></li>
            <li><a href="#">Hiring Services</a></li>
            <li><a href="#">Testimonials</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-white">Connect</h5>
          <ul className="mt-3 space-y-2">
            <li><a href="#">Contact</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <p className="mt-8 text-center text-gray-500">
        © {new Date().getFullYear()} FlexJobs. All rights reserved.
      </p>
    </footer>
  );
}
