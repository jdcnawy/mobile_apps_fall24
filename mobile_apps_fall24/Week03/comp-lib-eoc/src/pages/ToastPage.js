import { useState } from 'react';
import Toast from '../components/Toast';

export default function ToastPage() {
  const [showToast, setShowToast] = useState(false);

  const handleShowToast = () => {
    setShowToast(true);
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Toast Notification Example</h1>
      <button
        onClick={handleShowToast}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        Show Toast
      </button>

      {showToast && (
        <Toast message="This is a notification!" onClose={handleCloseToast} />
      )}
    </div>
  );
}
