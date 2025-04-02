import { useState } from 'react';

export default function StrataManagement() {
  const [showModal, setShowModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const committeeMembers = [
    { Position: 'Chairperson', Name: 'Marc Jacobs', email: 'chairpersonmarc@example.com' },
    { Position: 'Treasurer', Name: 'Joyner Lucas', email: 'treasurerjoyner@example.com' },
    { Position: 'Secretary', Name: 'Civ Baby', email: 'secretarybaby@example.com' },
  ];

  const handleMemberClick = (member) => {
    setSelectedMember(member);
    setShowModal(true);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Strata Management</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">About the Building</h2>
        <p>
          Our building is managed by the Owners Corporation, which is responsible for the maintenance of common areas and the overall management of the property. The building is located at 123 Example Street, Sydney, NSW 2000.
        </p>
        <p>
          Our community values include fostering a vibrant and inclusive environment. We encourage participation in sports activities, social gatherings, and community parties to build strong relationships among residents.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Resident Assistance</h2>
        <p>
          In New South Wales strata-titled apartment buildings, governed by the Strata Schemes Management Act (2015), residents seeking assistance or information should direct their inquiries to the Strata Committee. Specifically, for matters concerning financial levies, payments, or the administration fund, contacting the Treasurer is advisable. For record-keeping, minutes, or general correspondence, the Secretary is the appropriate point of contact. For broader building management issues, policy concerns, or to escalate matters, residents should reach out to the Chairperson. These elected representatives, ensuring compliance with the act, are responsible for managing the Owners Corporation and are best positioned to address resident needs.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Upcoming Events</h2>
        <p>
          Stay informed about upcoming events and meetings.
        </p>
        <ul className="list-disc list-inside">
          <li>Annual General Meeting - April 15, 2025, at 10:00 AM, Community Hall</li>
          <li>Community BBQ - May 20, 2025, at 12:00 PM, Central Park</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Contact the Strata Committee</h2>
        <p>
          Reach out to the Strata Committee for any questions or concerns.
        </p>
        <ul className="list-disc list-inside">
          {committeeMembers.map((member, index) => (
            <li key={index} onClick={() => handleMemberClick(member)} className="cursor-pointer text-blue-500">
              {member.Position}: {member.Name} - {member.email}
            </li>
          ))}
        </ul>
      </section>

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-xl font-semibold mb-2">{selectedMember.Position}: {selectedMember.Name}</h2>
            <p>Email: {selectedMember.email}</p>
            <button onClick={() => setShowModal(false)} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}