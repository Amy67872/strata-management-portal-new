export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Welcome to Our Strata Committee Portal</h1>
        <p className="text-lg">Managing our building under the Strata Schemes Management Act (2015)</p>
      </header>

      <section className="mb-12">
        <img
          src="/assets/strata-building.jpg"
          alt="Strata building"
          className="rounded-xl shadow-md mx-auto mb-6 max-w-3xl"
        />
        <p className="text-lg max-w-3xl mx-auto">
          As members of the Strata Committee, we oversee the day-to-day management of our apartment building.
          This includes organising repairs, managing finances, and ensuring compliance with the{' '}
          <a className="text-blue-600 underline" href="https://classic.austlii.edu.au/au/legis/nsw/consol_act/ssma2015242/" target="_blank">
            Strata Schemes Management Act 2015
          </a>. Each unit owner contributes through levies to cover maintenance and capital works.
        </p>
      </section>

      <section className="bg-white p-6 rounded-xl shadow-md max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4">Meet Your Committee</h2>
        <ul className="list-disc list-inside">
          <li><strong>Chairperson</strong> – Oversees meetings and ensures decisions are actioned</li>
          <li><strong>Secretary</strong> – Handles communication and records</li>
          <li><strong>Treasurer</strong> – Manages the finances, including levies and expenses</li>
          <li>Up to 6 additional members assisting with various tasks</li>
        </ul>
        <img
          src="/assets/committee-meeting.jpg"
          alt="Committee meeting"
          className="rounded-lg shadow mt-6"
        />
      </section>

      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
        <ul className="space-y-3 list-disc list-inside">
          <li>Arrange maintenance of common property like lifts, gardens and foyers</li>
          <li>Handle disputes or breaches of by-laws</li>
          <li>Organise annual general meetings and vote on important issues</li>
          <li>Keep financial records and prepare budgets</li>
        </ul>
        <p className="mt-4">
          Want to know more about your role as an owner? Check out the{' '}
          <a
            href="https://www.nsw.gov.au/housing-and-construction/strata/serving-on-a-committee"
            target="_blank"
            className="text-blue-600 underline"
          >
            NSW Government guide to serving on a committee
          </a>.
        </p>
      </section>
    </main>
  );
}
