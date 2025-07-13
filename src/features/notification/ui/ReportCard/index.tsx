import { Report } from '../../model/cardTypes';

interface ReportCardProps {
  data: Report;
}

export default function ReportCard({ data }: ReportCardProps) {
  return (
    <div>
      <h3>{data.REPORT_TYPE}</h3>
    </div>
  );
}
