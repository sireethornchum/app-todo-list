import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title:'Slowday — ปฏิทินงานของฉัน', description:'จัดการงานและเวลาอย่างเรียบง่ายในปฏิทินส่วนตัว' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="th"><body>{children}</body></html> }
