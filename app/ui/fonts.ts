/*
 * @Author: Mr. Chao
 * @Date: 2024-04-17 15:49:07
 * @LastEditors: Mr. Chao
 * @LastEditTime: 2024-04-17 16:02:47
 * @Description: 
 */
// next自带字体
// 它将字体文件与其他静态资源一起托管，因此没有额外的网络请求。 减少CLS风险
import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({ weight: ['400','700'], subsets: ['latin'] });