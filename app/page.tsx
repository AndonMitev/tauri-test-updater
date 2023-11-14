'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isUpdatable, setIsUpdatable] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    (async () => {
      const { relaunch } = await import('@tauri-apps/api/process');
      const { checkUpdate, installUpdate } = await import(
        '@tauri-apps/api/updater'
      );
      console.log('ei 1');
      const isUpdatable = await checkUpdate();
      console.log(isUpdatable);
      setIsUpdatable(isUpdatable.shouldUpdate);
      if (isUpdatable.shouldUpdate) {
        // You could show a dialog asking the user if they want to install the update here.
        // console.log(
        //   `Installing update ${manifest?.version}, ${manifest?.date}, ${manifest?.body}`
        // )

        // Install the update. This will also restart the app on Windows!
        await installUpdate();

        // On macOS and Linux you will need to restart the app manually.
        // You could use this step to display another confirmation dialog.
        await relaunch();
      }
    })();
    console.log('ei');
  }, []);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <p className='text-white'>Is update available: {String(isUpdatable)}</p>
      <button onClick={() => setCounter((counter) => ++counter)}>
        Counter: {counter}
      </button>
    </main>
  );
}
