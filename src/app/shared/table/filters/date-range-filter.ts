import { FilterType, TableFilterDef } from 'app/types/Table';
import * as moment from 'moment';

import { TableFilter } from './table-filter';

export class DateRangeFilter extends TableFilter {
  constructor() {
    super();
    // Define filter
    const filterDef: TableFilterDef = {
      id: 'dateRange',
      httpId: 'DateRange',
      type: FilterType.DATE_RANGE,
      name: 'general.search_date',
      class: 'col-sm-6 col-md-4 col-lg-3 col-xl-2',
      timePicker24Hour: true,
      timePicker: true,
      timePickerSeconds: true,
      currentValue: {
        startDate: moment(),
        endDate: moment().add(1, 'years')
      }
    };
    // Set
    this.setFilterDef(filterDef);
  }
}
