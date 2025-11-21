import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, ChevronRight } from 'lucide-react';
export function Footer() {
    return (
        <footer className="py-10 sm:py-16 border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className="relative p-8 md:p-12 lg:p-16 
                        bg-white dark:bg-gray-950 
                        border-6 border-black dark:border-white 
                        rounded-2xl 
                        shadow-[10px_10px_0_0_#000000] dark:shadow-[12px_12px_0_0_#374151]
                        flex flex-col gap-10">
                    <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-8 md:gap-12 pb-8 border-b border-black dark:border-white">
                        <div className="col-span-1 md:col-span-1 lg:col-span-2 flex flex-col ">
                            <Link href="/" className="mb-4 flex items-center">
                                <Image
                                    src="/hero1.svg"
                                    alt="NotesDeck Logo"
                                    width={150}
                                    height={45}
                                    className="dark:invert h-auto"
                                />
                            </Link>
                            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 max-w-sm mt-2">
                                Your ultimate companion for high-quality, expert-verified notes and strategies to ace your exams.
                            </p>
                        </div>
                        {/* col2 */}
                        <div className="col-span-1">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Links</h3>
                            <ul className="space-y-3 text-gray-800 dark:text-gray-300">
                                <li>
                                    <Link href="/" className="flex items-center group hover:text-black  dark:hover:text-white transition-colors duration-200">
                                        <ChevronRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" /> Home
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/Notes" className="flex items-center group hover:text-black  dark:hover:text-white transition-colors duration-200">
                                        <ChevronRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" /> Notes
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/About" className="flex items-center group hover:text-black  dark:hover:text-white transition-colors duration-200">
                                        <ChevronRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" /> About
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/Contact" className="flex items-center group hover:text-black  dark:hover:text-white transition-colors duration-200">
                                        <ChevronRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" /> Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* col -3  */}
                        <div className="col-span-1">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Legal & Connect</h3>
                            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                                <li>
                                    <Link href="/privacy-policy" className="flex items-center group hover:text-black  dark:hover:text-white transition-colors duration-200">
                                        <ChevronRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" /> Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/terms-of-service" className="flex items-center group hover:text-black  dark:hover:text-white transition-colors duration-200">
                                        <ChevronRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" /> Terms of Service
                                    </Link>
                                </li>
                                <li>
                                    <Link href="mailto:kishangupta.code@gmail.com" className="flex items-center group ml-5 hover:text-black  dark:hover:text-white transition-colors duration-200">
                                        <Mail className="w-4 h-4 mr-1 group-hover:text-black dark:group-hover:text-white" /> Email Us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                    {/* social-media */}
                    <div className="flex flex-row justify-between items-center  border-t border-gray-200 dark:border-gray-800">

                       
                        <div className="flex space-x-4">
                            <Link href="https://facebook.com/notesdeck" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200">
                                <Facebook className="w-6 h-6" />
                            </Link>
                            <Link href="https://twitter.com/notesdeck" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200">
                                <Twitter className="w-6 h-6" />
                            </Link>
                            <Link href="https://linkedin.com/company/notesdeck" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200">
                                <Linkedin className="w-6 h-6" />
                            </Link>
                            <Link href="https://instagram.com/notesdeck" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200">
                                <Instagram className="w-6 h-6" />
                            </Link>
                        </div>

                        {/* 2. Copyright Text (Center) */}
                        <div className="text-gray-600 dark:text-gray-400 absolute left-1/2 transform -translate-x-1/2">
                            <p>&copy; {new Date().getFullYear()} NotesDeck. All rights reserved.</p>
                        </div>

                        {/* 3. Placeholder (Right Side) - Using an empty div with the same spacing as the social icons to force balance */}


                    </div>
                </div>

            </div>

        </footer>
    )
}