import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface RoleSelectProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  name?: string;
}

export function RoleSelect({
  value,
  onChange,
  name,
  defaultValue,
}: RoleSelectProps) {
  return (
    <Select
      value={value}
      defaultValue={defaultValue}
      onValueChange={onChange}
      name={name}
    >
      <SelectTrigger>
        <SelectValue placeholder="역할 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="일반 계정">일반 계정</SelectItem>
        <SelectItem value="코디네이터">코디네이터</SelectItem>
        <SelectItem value="사무국">사무국</SelectItem>
      </SelectContent>
    </Select>
  );
}
