import React from 'react';
import StaffMember from './StaffMember';
import { staffMembers } from '../../data/staff';

export default function AboutContent() {
  return (
    <div className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Team Section */}
        <div className="bg-gray-900 rounded-lg overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Our Dedicated Team</h3>
            <p className="text-gray-300 mb-8">
              Behind every exceptional dining experience at Kamalo City is our talented and passionate team. From our skilled chefs who craft authentic African dishes to our attentive service staff who ensure your comfort, each member contributes to making your visit memorable.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {staffMembers.map((member, index) => (
                <StaffMember
                  key={index}
                  image={member.image}
                  name={member.name}
                  role={member.role}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}