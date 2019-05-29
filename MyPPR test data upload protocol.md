# MyPPR test data upload protocol

## Download datasets to P drive and capture numbers of records
- [ ] Program
- [ ] ProgramSchedule
- [ ] ActivityType
- [ ] ActivityCategory
- [ ] Facilty
- [ ] FacilitySchedule
- [ ] Amenity
- [ ] AmenityType
- [ ] Program Attendance
- [ ] Days
- [ ] District
- [ ] LocationType
- [ ] TrainingRegistration
- [ ] TrainingEvent
- [ ] MyPPR_issues
- [ ] MyPPR_resources


## Upload datasets
### Archive old attendance data
### Determine records availability
* Total records: 64397
* Attendance records: 50731
* Needed to be copied: 13666
* Available: 36031
- [x] Check to see if space is available

### Initial upload
#### Lookup tables
- [x] Days
- [x] ActivityCategory
- [x] Change ActivityCategoryID to Number type
- [x] LocationType
 - [x] Change LocationTypeID to Number data type
- [x] District (no manager field)
- [x] AmenityType (without EnteredBy)
 - [x] Change AmenityTypeID to number data type

#### Subsequent tables
- [x] Facility (571 records)
 - [x] Map address fields
- [x] Amenity (without EnteredBy) 2403 records
 - [x] Change AmenityID to Number data type
- [x] Program 3538 records
 - [x] Change ProgramID to data type number
 - Exclude 
  * ProgramNameFull
  * EnteredBy
  * AgeRange
- [x] ProgramSchedule (5,125 records)
 - [x] Change ProgramScheduleID to data type number
 - Exclude
  * ScheduleLength
- [x] FacilitySchedule 1273 records
 - [x] Change FacilityScheduleID to data type 

### Based on facility
- [x] Users

### Based on users
- [ ] ActivityType
 - [x] Change ActivityTypeID to Number type
- [ ] Staff
- [ ] Managers
- [ ] Admin
- [ ] AmenityType (with EnteredBy)
- [ ] District (with manager field)

#### Disregarded tables
~~Program Attendance~~
~~MyPPR_issues~~
~~MyPPR_resources~~
~~TrainingRegistration~~
~~TrainingEvent~~

### Subsequent uploads
Select a field to match records



