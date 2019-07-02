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
- [x] Users (254 records)

### Based on users
- [x] ActivityType

- [x] Change ActivityTypeID to Number type

- [x] Staff (to update assigned facilities) (236 records)

      - [x] match on email address
      - [x] only upload assigned facility

- [x] Managers (to update district_connection)

      - [x] match on email address
      - [x] only upload district_connection --> District_connection>DistrictName

- [ ] AmenityType (with EnteredBy only)

      - [ ] Match on AmenityTypeID

            ``` 
            issue matching on EnteredBy name
            ```

- [x] District (with manager field)

      - [x] match  on District Number

      - [x] Map to Manager>Name

            ```
            Some names didn't match
            Tom Dignam, John Cooney, Val Arhondakis
            ```

            ​

#### Disregarded tables
~~Program Attendance~~
~~MyPPR_issues~~
~~MyPPR_resources~~
~~TrainingRegistration~~
~~TrainingEvent~~
~~Admin~~

### Subsequent uploads
Select a field to match records



