import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title:'ToDo List — จัดการงานส่วนตัว', description:'จัดการงานและเวลาอย่างเรียบง่ายในแอปรายการงานส่วนตัว' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="th"><body>{children}</body></html> }
