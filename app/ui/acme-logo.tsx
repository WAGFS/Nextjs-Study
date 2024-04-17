/*
 * @Author: Mr. Chao
 * @Date: 2024-04-17 15:05:02
 * @LastEditors: Mr. Chao
 * @LastEditTime: 2024-04-17 16:05:22
 * @Description: 
 */
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/font';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
