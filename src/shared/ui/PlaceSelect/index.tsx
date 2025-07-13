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

export function PlaceSelect({
  value,
  onChange,
  name,
  defaultValue,
}: RoleSelectProps) {
  return (
    <Select
      {...(value !== undefined ? { value } : { defaultValue })}
      onValueChange={onChange}
      name={name}
    >
      <SelectTrigger>
        <SelectValue placeholder="구역 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="선택 안함">선택 안함</SelectItem>
        <SelectItem value="수완세영">수완세영</SelectItem>
        <SelectItem value="수완에너지">수완에너지</SelectItem>
        <SelectItem value="신가">신가</SelectItem>
        <SelectItem value="신창">신창</SelectItem>
        <SelectItem value="도산">도산</SelectItem>
        <SelectItem value="우산">우산</SelectItem>
        <SelectItem value="월곡1">월곡1</SelectItem>
        <SelectItem value="첨단1">첨단1</SelectItem>
        <SelectItem value="평동">평동</SelectItem>
        <SelectItem value="월곡2">월곡2</SelectItem>
        <SelectItem value="하남">하남</SelectItem>
      </SelectContent>
    </Select>
  );
}
