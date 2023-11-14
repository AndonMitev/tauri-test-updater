'use client';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
  // useEffect(() => {
  //   (async () => {
  //     const { checkUpdate } = await import('@tauri-apps/api/updater');

  //     const update = await checkUpdate();

  //     console.log('update', update);
  //   })();
  // }, []);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'></main>
  );
}
