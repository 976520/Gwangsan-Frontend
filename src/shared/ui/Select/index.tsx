import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
  interface RoleSelectProps {
    value: string
    onChange: (value: string) => void
  }
  
  export function RoleSelect({ value, onChange }: RoleSelectProps) {
    return (
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder="역할 선택" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="일반 계정">일반 계정</SelectItem>
          <SelectItem value="코디네이터">코디네이터</SelectItem>
          <SelectItem value="사무국">사무국</SelectItem>
        </SelectContent>
      </Select>
    )
  }

  export {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
  }