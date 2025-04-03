export default function Docs() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Documentation</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Roles and Responsibilities</h2>
        <p>
          The Strata Committee is responsible for managing the body corporate. This includes the Treasurer, Secretary, and Chairperson, as well as other members. Each role has specific duties outlined in the Strata Schemes Management Act (2015).
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Meeting Minutes</h2>
        <p>
          Access the minutes from past meetings to stay informed about decisions and discussions.
        </p>
        <ul className="list-disc list-inside">
          <li><a href="/docs/CodingMilestones2.pdf" className="text-blue-500 hover:underline">January 2025</a></li>
          <li><a href="/docs/CodingMilestones2.pdf" className="text-blue-500 hover:underline">February 2025</a></li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Financial Reports</h2>
        <p>
          Review the financial health of the building, including the administration fund and capital works fund.
        </p>
        <ul className="list-disc list-inside">
          <li><a href="/docs/CodingMilestones2.pdf" className="text-blue-500 hover:underline">2024 Financial Report</a></li>
          <li><a href="/docs/CodingMilestones2.pdf" className="text-blue-500 hover:underline">2023 Financial Report</a></li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Maintenance Requests</h2>
        <p>
          Submit and track maintenance requests for common areas and facilities.
        </p>
        <a href="/maintenance-requests" className="text-blue-500 hover:underline">Submit a Maintenance Request</a>
      </section>
    </div>
  );
}
