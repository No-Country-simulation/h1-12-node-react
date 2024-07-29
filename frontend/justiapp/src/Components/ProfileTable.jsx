import React from "react";
import PropTypes from "prop-types";

const ProfileTable = ({ profiles }) => {
  return (
    <div className="p-4">
      <div className="text-[#004e79] text-xl font-bold font-['Lato'] mb-4">
        Hace una semana
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Rol</th>
            </tr>
          </thead>
          <tbody>
            {profiles.map((profile, index) => (
              <tr key={index}>
                <td>
                  <div className="flex items-center gap-4">
                    <img
                      src={profile.imageUrl}
                      alt={profile.name}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-gray-800 text-base font-semibold font-['Open Sans']">
                      {profile.name}
                    </span>
                  </div>
                </td>
                <td>
                  <span className="px-3 py-1.5 bg-white rounded-lg border border-[#9b9fa6] text-[#004e79] text-base font-semibold font-['Open Sans']">
                    {profile.role}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Define prop types for the component
ProfileTable.propTypes = {
  profiles: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProfileTable;
