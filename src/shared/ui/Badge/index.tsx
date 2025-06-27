import { cn } from "@/lib/utils"
import * as React from "react"

interface RoleBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  role: string
}

const getRoleBadgeColor = (role: string) => {
  switch (role) {
    case "코디네이터":
      return "bg-blue-100 text-blue-800"
    case "사무국":
      return "bg-green-100 text-green-800"
    case "일반 계정":
      return "bg-gray-100 text-gray-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export function RoleBadge({ role, className, ...props }: RoleBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium",
        getRoleBadgeColor(role),
        className
      )}
      {...props}
    >
      {role}
    </div>
  )
}
