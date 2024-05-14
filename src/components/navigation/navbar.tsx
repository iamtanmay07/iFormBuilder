"use client";
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SidebarNavItem } from '@/types/nav-types';

import { cn } from '@/lib/utils';
import { Icons } from '../icons';

interface DashboardNavProps {
  items: SidebarNavItem[];
}

const DashboardNav = ({ items }: DashboardNavProps) => {
  const path = usePathname();

  if (!items?.length) return null;

  return (
    <nav>{
      items.map((item, index) => {
        const Icon = Icons[item?.icon || "list"];
        const isActive = path === item.href;
        return item.href && (
          <Link key={index} href={item.disabled ? "/" : item.href}>
            <span
              className={cn(
                "group flex my-1 items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground border-white bg-transparent text-white",
                isActive ? "bg-accent text-black" : "transparent",
                item.disabled ? "cursor-not-allowed opacity-80 bg-transparent text-white border-white border-solid rounded" : "cursor-pointer",
              )}
            >
              <Icon className="w-4 h-4 mr-2" />
              {item.title}
            </span>
          </Link>
        );
      })
    }
    </nav>
  )
}

export default DashboardNav